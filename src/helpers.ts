import {
  GraphQLInputField,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLType,
  isEnumType,
  isInputObjectType,
  isInputType,
  isObjectType,
  isScalarType,
  isUnionType,
} from "graphql";

function typeExtract(field: [string, GraphQLInputField]) {
  const name = field[0];
  const optional = !field[1].type.toString().endsWith("!");
  const destructured =
    field[1].type instanceof GraphQLNonNull
      ? field[1].type.ofType
      : field[1].type;
  let type;
  if (
    !(destructured instanceof GraphQLInputObjectType) &&
    !(destructured instanceof GraphQLList)
  ) {
    if (isScalarType(destructured)) {
      if (destructured.toString().replace(/[[\]!]/g, "") === "JSONObject") {
        type = "JSON";
      } else {
        const typestr = destructured.toString().replace(/[[\]!]/g, "");
        type = ["String", "Int", "Float", "Boolean"].includes(typestr)
          ? typestr
          : "String";
      }
    } else if (isEnumType(destructured)) {
      type = "String";
    }
    //else {
    //   console.log("else case", destructured.toString(), destructured);
    //   type = destructured.toString().replace(/[[\]!]/g, "");
    // }
  } else {
    type = "JSON";
  }

  return { name, optional, type };
}

export function getNodeTypes(schema: GraphQLSchema) {
  return Object.values(schema.getTypeMap())
    .filter(
      (type): type is GraphQLObjectType =>
        type instanceof GraphQLObjectType &&
        type.getInterfaces().some((iface) => iface.name === "Node")
    )
    .map((type) => type.name);
}

export function getCreateMutations(
  schema: GraphQLSchema,
  nodeTypes: string[],
  inputTypes: Record<string, Record<string, string>>
) {
  const mutationType = schema.getMutationType();
  const typeMap = schema.getTypeMap();
  if (!mutationType) {
    return [];
  }

  const mutationFields = mutationType.getFields();
  const crudOperations = ["create"];

  return Object.entries(mutationFields)
    .filter(([name, _]) => {
      const matchesNodeType = nodeTypes.find((nodeType) =>
        name.toLowerCase().startsWith(nodeType.toLowerCase())
      );
      const matchesCRUDOperation = crudOperations.find((op) =>
        name.toLowerCase().endsWith(op)
      );
      return (
        matchesNodeType &&
        matchesCRUDOperation &&
        name.toLowerCase() ===
          matchesNodeType.toLowerCase() + matchesCRUDOperation.toLowerCase()
      );
    })
    .map(([name, field]) => {
      if (
        !field.args[0] ||
        !(field.args[0].type instanceof GraphQLNonNull) ||
        !(field.args[0].type.ofType instanceof GraphQLInputObjectType)
      ) {
        // console.log("afield", field, typeof field.args[0].type);
        return {
          name,
          returnType: field.type.toString().replace(/[[\]!]/g, ""),
          args: [],
        };
      }
      const inputType = (
        field.args[0].type as GraphQLNonNull<GraphQLInputObjectType>
      ).ofType;
      console.log("inputType", inputType);
      // console.log("inputType", inputType.type);
      if (isInputObjectType(inputType)) {
        const fields = inputType.getFields();
        // Object.entries(fields).forEach(([fieldName, fieldValue]) => {
        //   console.log(`  ${fieldName}: ${fieldValue.type.toString()}`);
        // });
        return {
          name,
          returnType: field.type.toString().replace(/[[\]!]/g, ""),
          args: Object.entries(fields).map(([fieldName, fieldValue]) => {
            // console.log(fieldValue.type, "fieldvalue.type");
            // return [fieldName, fieldValue.type.toString()];
            // console.log("typeExtract", typeExtract([fieldName, fieldValue]));
            return typeExtract([fieldName, fieldValue]);
          }),
        };
      } else {
        console.log("  Unable to display fields for this input type");
      }
    });
}

export function getAllRelatedTypes(schema: GraphQLSchema): string[] {
  const nodeTypes = getNodeTypes(schema);
  const relatedTypes = new Set<string>();

  function addRelatedTypes(typeName: string) {
    if (relatedTypes.has(typeName)) return;

    relatedTypes.add(typeName);
    const type = schema.getType(typeName);

    if (isObjectType(type)) {
      const fields = type.getFields();
      Object.values(fields).forEach((field) => {
        const fieldType = field.type.toString().replace(/[[\]!]/g, "");
        addRelatedTypes(fieldType);
      });
    }
  }

  nodeTypes.forEach(addRelatedTypes);

  return Array.from(relatedTypes);
}

interface TypeNode {
  name: string;
  fields: string[];
}

type TypeGraph = Map<string, TypeNode>;

export function buildNodeTypeGraphs(
  schema: GraphQLSchema
): Map<string, TypeGraph> {
  const nodeTypes = getNodeTypes(schema);
  const nodeTypeGraphs = new Map<string, TypeGraph>();

  function buildTypeGraph(
    typeName: string,
    graph: TypeGraph,
    visited: Set<string>
  ) {
    if (visited.has(typeName)) return;
    visited.add(typeName);

    const type = schema.getType(typeName);
    if (!isObjectType(type)) return;

    const fields = type.getFields();
    const fieldNames = Object.keys(fields);

    graph.set(typeName, { name: typeName, fields: fieldNames });

    fieldNames.forEach((fieldName) => {
      const fieldType = fields[fieldName].type;
      const namedType = getNamedType(fieldType);
      if (isObjectType(namedType)) {
        buildTypeGraph(namedType.name, graph, visited);
      }
    });
  }

  nodeTypes.forEach((nodeType) => {
    const graph: TypeGraph = new Map();
    buildTypeGraph(nodeType, graph, new Set());
    nodeTypeGraphs.set(nodeType, graph);
  });

  return nodeTypeGraphs;
}

function getNamedType(type: GraphQLType): GraphQLType {
  while (type.toString().startsWith("[") || type.toString().endsWith("!")) {
    type = (type as any).ofType;
  }
  return type;
}

export function getNodeTypeScalarFields(
  nodeTypes: string[],
  schema: GraphQLSchema
) {
  return Object.fromEntries(
    nodeTypes.map((typeName) => {
      const type = schema.getType(typeName) as GraphQLObjectType;
      const fields = type.getFields();
      const scalarFields = Object.entries(fields)
        .filter(([_, field]) => {
          const fieldType = field.type.toString().replace(/[[\]!]/g, "");
          return (
            fieldType === "String" ||
            fieldType === "Float" ||
            // fieldType === "DateTime" ||
            fieldType === "Boolean" ||
            // fieldType === "JSONObject" ||
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
}

export function getIdQueryFields(schema: GraphQLSchema, nodeTypes: string[]) {
  const queryType = schema.getQueryType();

  if (queryType) {
    const queryFields = queryType.getFields();
    // console.log("queryFields", queryFields);
    const nodeQueries: Array<[string, string, string[]]> = Object.entries(
      queryFields
    )
      .filter(([_, field]) => {
        const returnType = field.type.toString().replace(/[[\]!]/g, "");

        // console.log(
        //   "field.args",
        //   field.args.map((arg) => arg.name)
        // );
        return (
          nodeTypes.includes(returnType) &&
          field.args.length === 1 &&
          field.args.map((arg) => arg.name)[0] === "id"
        );
        // &&
        // field.args.every((arg) => arg.type.toString() === "String!")
      })
      .map(([fieldName, field]) => {
        const returnType = field.type.toString().replace(/[[\]!]/g, "");
        console.log("returnType", returnType);
        const args: string[] = field.args.map(
          (arg) => `${arg.name}: ${arg.type.toString()}`
        );
        return [fieldName as string, returnType as string, args as string[]];
      });
    return nodeQueries;
  }
}

export function getInputTypes(schema: GraphQLSchema) {
  const inputTypes: Record<string, Record<string, string>> = {};

  const typeMap = schema.getTypeMap();
  Object.values(typeMap).forEach((type) => {
    if (isInputObjectType(type)) {
      const inputTypeName = type.name;
      const fields: Record<string, string> = {};

      const inputFields = type.getFields();
      Object.entries(inputFields).forEach(([fieldName, field]) => {
        fields[fieldName] = field.type.toString();
      });

      inputTypes[inputTypeName] = fields;
    }
  });

  return inputTypes;
}
