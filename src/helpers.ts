import { GraphQLObjectType, GraphQLSchema } from "graphql";

export function getNodeTypes(schema: GraphQLSchema) {
  return Object.values(schema.getTypeMap())
    .filter(
      (type): type is GraphQLObjectType =>
        type instanceof GraphQLObjectType &&
        type.getInterfaces().some((iface) => iface.name === "Node")
    )
    .map((type) => type.name);
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
    console.log("queryFields", queryFields);
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
        const args: string[] = field.args.map(
          (arg) => `${arg.name}: ${arg.type.toString()}`
        );
        return [fieldName as string, returnType as string, args as string[]];
      });
    return nodeQueries;
  }
}
