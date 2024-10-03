import fs from "fs";
import path from "path";
import { buildSchema, GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  getIdQueryFields,
  getNodeTypes,
  getNodeTypeScalarFields,
} from "./helpers";

// Load the GraphQL schema from the file
const schemaPath = path.join(__dirname, "schema.graphql");
const typeDefs = fs.readFileSync(schemaPath, "utf-8");

console.log("Hello World");
console.log("GraphQL Schema Loaded:", typeDefs);

const schema = buildSchema(typeDefs);
console.log("Schema Built:", schema);

// Add the following code to get types implementing Node
const nodeTypes = getNodeTypes(schema);

console.log("Types implementing Node:", nodeTypes);

// Add the following code to associate Node types with their scalar fields
const nodeTypeScalarFields = getNodeTypeScalarFields(nodeTypes, schema);

console.log("nodeTypeScalarFields", nodeTypeScalarFields);

// Add the following code to find Query fields returning Node types

// const idQueryFields = getIdQueryFields(schema, nodeTypes);

const queryType = schema.getQueryType();

if (queryType) {
  const queryFields = queryType.getFields();
  console.log("queryFields", queryFields);
  const nodeQueries: Array<[string, string, string[]]> = Object.entries(
    queryFields
  )
    .filter(([_, field]) => {
      const returnType = field.type.toString().replace(/[[\]!]/g, "");

      return nodeTypes.includes(returnType);
      // &&
      // field.args.every((arg) => arg.type.toString() === "String!")
    })
    .map(([fieldName, field]) => {
      const returnType = field.type.toString().replace(/[[\]!]/g, "");
      const args: string[] = field.args.map(
        (arg) => `${arg.name}: ${arg.type.toString()}`
      );
      return [fieldName as string, returnType as string, args as string[]];
    });
  // as Array<[string, string, string[]]>;

  // console.log("Query fields returning Node types with parameters:");
  // nodeQueries.forEach(([fieldName, returnType, args]) => {
  //   console.log(`${fieldName}(${args}): ${returnType}`);
  //   console.log(args);
  // });

  const collectionSchemas: Array<string> = [];
  const collectionTypes: Array<string> = [];
  const baseSchemas: Array<string> = [];
  console.log("nodeQueries", nodeQueries);
  nodeQueries.forEach(([fieldName, returnType, args]) => {
    collectionSchemas.push(
      generateCollectionSchema([fieldName, returnType, args.join(",")])
    );
    collectionTypes.push(
      generateCollectionType([fieldName, returnType, args.join(",")])
    );
    baseSchemas.push(
      generateBaseSchema([fieldName, returnType, args.join(",")])
    );
  });
  const rootSchema = generateRootSchema(nodeQueries);
  const rootType = generateRootType(
    nodeQueries.map(([fieldName, returnType]) => returnType.toLowerCase())
  );

  // console.log("Generated Root Type:");
  // console.log(rootType);

  // console.log("collectionTypes", collectionTypes);
  function appendToEachLine(multilineString: string, prefix: string): string {
    return multilineString
      .split("\n")
      .map((line) => prefix + line)
      .join("\n");
  }

  //   // Example usage:
  //   const exampleString = `Line 1
  // Line 2
  // Line 3`;
  //   const prefixedString = appendToEachLine(exampleString, "> ");
  //   console.log(prefixedString);
  const schema = `
    {
      "schema": {
      "types": [
        ${appendToEachLine(rootSchema, "        ")},
        ${appendToEachLine(collectionSchemas.join(",\n"), "        ")},
        ${appendToEachLine(baseSchemas.join(",\n"), "        ")}
      ]
    }
  }
  `;
  console.log("schemas", schema);
  const index = rootType + "\n" + collectionTypes.join("\n");
  console.log(index);

  // Create the output directory if it doesn't exist
  const outputDir = path.join(__dirname, "output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const memconfig = schema;
  // fs.writeFileSync(path.join(outputDir, "memconfig.json"), memconfig);

  // // Write collectionTypes to a file
  // fs.writeFileSync(path.join(outputDir, "index.ts"), index);

  // console.log("Files have been written to the /output folder.");
}

function generateRootType(types: Array<string>) {
  return `export const Root = {
  ${types.map((type) => `${type}: () => ({})`).join(",\n  ")}
};`;
}

function generateRootSchema(
  nodeQueries: Array<[string, string, string[]]>
): string {
  const fields = nodeQueries.map(([fieldName, returnType]) => {
    return {
      name: returnType.toLowerCase(),
      type: `${returnType}Collection`,
      description: `Collection of ${returnType}s`,
    };
  });

  const rootSchema = {
    name: "Root",
    description: "Driver for the API",
    fields: [...fields],
  };

  return JSON.stringify(rootSchema, null, 2);
}

// function generateBaseType(type: string): string {
//   return `
//   const ${type} = {

//     page(): ${type}[] {

//   };
//   `;
// }

function generateBaseSchema(arr: Array<string>): string {
  const [fieldName, returnType, args] = arr;
  const fields = nodeTypeScalarFields[returnType].map((field) => {
    const fieldName = Object.keys(field)[0];
    const fieldType = field[fieldName];
    return {
      name: fieldName,
      type: fieldType,
      description: `The ${returnType}'s ${fieldName}`,
    };
  });

  const schema = {
    name: returnType,
    fields: [...fields],
    events: [],
    description: `A ${returnType}`,
    actions: [],
  };

  return JSON.stringify(schema, null, 2);
}

function generateCollectionSchema(arr: Array<string>): string {
  return `
  {
    "name": "${arr[1]}Collection",
    "fields": [
      {
        "name": "one",
        "type": "${arr[1]}",
        "params": [
          ${
            arr[2].length > 0
              ? `{
            "name": "${arr[2].split(":")[0]}",
            "type": "${arr[2].split(":")[1].trim().replace("!", "")}"
          }`
              : ""
          }
        ],
        "description": "Field representing a single ${arr[1]}"
      }
    ],
    "events": [],
    "description": "Collection of ${arr[1]}"
  }`;
}

function generateCollectionType(arr: Array<string>) {
  // console.log(nodeTypeScalarFields);
  console.log("collectionarr", arr);
  return `
  export const ${arr[1]}Collection = {

    async one(args, { info }) {
      const query =\`
      query {
        ${arr[0]}(${arr[2].length > 0 ? `id: args.id` : ""}) {
          ${nodeTypeScalarFields[arr[1]]
            .map((field) => Object.keys(field)[0])
            .join("\n          ")}
        }
      }\`
    }
  };
  `;
}

// Generate collection types for each Node type
// const collectionTypes = nodeTypes.map(generateCollectionType);

// console.log("Generated Collection Types:");
// collectionTypes.forEach((type) => console.log(type));

// Add the following code to generate directed graphs

// function generateDirectedGraph(schema: GraphQLSchema, typeName: string) {
//   const type = schema.getType(typeName) as GraphQLObjectType;
//   if (!type) {
//     console.log(`Type ${typeName} not found in schema`);
//     return;
//   }

//   const graph: Record<string, string[]> = {};
//   graph[typeName] = [];

//   const fields = type.getFields();
//   for (const fieldName in fields) {
//     const field = fields[fieldName];
//     const fieldType = field.type.toString().replace(/[[\]!]/g, "");
//     graph[typeName].push(fieldType);

//     if (schema.getType(fieldType) instanceof GraphQLObjectType) {
//       graph[fieldType] = [];
//     }
//   }

//   console.log(`Directed Graph for ${typeName}:`);
//   console.log(JSON.stringify(graph, null, 2));
// }

// // Generate directed graphs for each Node type
// nodeTypes.forEach((typeName) => {
//   generateDirectedGraph(schema, typeName);
// });
