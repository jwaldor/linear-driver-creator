import fs from "fs";
import path from "path";
import { buildSchema, GraphQLObjectType, GraphQLSchema } from "graphql";

// Load the GraphQL schema from the file
const schemaPath = path.join(__dirname, "schema.graphql");
const typeDefs = fs.readFileSync(schemaPath, "utf-8");

console.log("Hello World");
console.log("GraphQL Schema Loaded:", typeDefs);

const schema = buildSchema(typeDefs);
console.log("Schema Built:", schema);

// Add the following code to get types implementing Node
const nodeTypes = Object.values(schema.getTypeMap())
  .filter(
    (type): type is GraphQLObjectType =>
      type instanceof GraphQLObjectType &&
      type.getInterfaces().some((iface) => iface.name === "Node")
  )
  .map((type) => type.name);

console.log("Types implementing Node:", nodeTypes);

// Add the following code to associate Node types with their scalar fields
const nodeTypeScalarFields = Object.fromEntries(
  nodeTypes.map((typeName) => {
    const type = schema.getType(typeName) as GraphQLObjectType;
    const fields = type.getFields();
    const scalarFields = Object.entries(fields)
      .filter(([_, field]) => {
        const fieldType = field.type.toString().replace(/[[\]!]/g, "");
        return (
          fieldType === "String" ||
          fieldType === "Float" ||
          fieldType === "DateTime" ||
          fieldType === "Boolean" ||
          fieldType === "JSONObject" ||
          fieldType === "Int"
        );
      })
      .map(([fieldName, field]) => {
        const fieldType = field.type.toString().replace(/[[\]!]/g, "");
        return { [fieldName]: fieldType };
      });
    return [typeName, scalarFields];
  })
);

// Add the following code to find Query fields returning Node types
const queryType = schema.getQueryType();

if (queryType) {
  const queryFields = queryType.getFields();
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

  nodeQueries.forEach(([fieldName, returnType, args]) => {
    collectionSchemas.push(
      generateCollectionSchema([fieldName, returnType, args.join(",")])
    );
    collectionTypes.push(
      generateCollectionType([fieldName, returnType, args.join(",")])
    );
  });

  console.log(collectionSchemas);

  const rootSchema = generateRootSchema(nodeQueries);
  console.log("Generated Root Schema:");
  console.log(rootSchema);
  const rootType = generateRootType(
    nodeQueries.map(([fieldName, returnType]) => returnType.toLowerCase())
  );
  console.log("Generated Root Type:");
  console.log(rootType);
  // console.log(collectionTypes);
  // Create the output directory if it doesn't exist
  // const outputDir = path.join(__dirname, "output");
  // if (!fs.existsSync(outputDir)) {
  //   fs.mkdirSync(outputDir);
  // }

  // // Write collectionSchemas to a file
  // const schemasContent = JSON.stringify(collectionSchemas.join("\n"), null, 2);
  // fs.writeFileSync(
  //   path.join(outputDir, "collectionSchemas.json"),
  //   schemasContent
  // );

  // // Write collectionTypes to a file
  // const typesContent = collectionTypes.join("\n");
  // fs.writeFileSync(path.join(outputDir, "collectionTypes.ts"), typesContent);

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

function generateBaseSchema(type: string): string {
  return `
  const ${type} = {
  
    page(): ${type}[] {
  
  };
  `;
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
            "type": "${arr[2].split(":")[1].trim()}"
          }`
              : ""
          }
        ],
        "description": "Field representing a single ${arr[1]}"
      },
      {
        "name": "page",
        "type": "${arr[1]}Page",
        "params": [],
        "description": "Field representing a page of ${arr[1]}s"
      }
    ],
    "events": [],
    "description": "Collection of ${arr[1]}s"
  }`;
}

function generateCollectionType(arr: Array<string>) {
  // console.log(nodeTypeScalarFields);

  return `
  export const ${arr[1]}Collection = {

    async one(args, { info }) {
      const query =\`
      query {
        ${arr[0]}(args.id) {
          ${nodeTypeScalarFields[arr[1]]
            .map((field) => Object.keys(field)[0])
            .join("\n          ")}
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);\`
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
