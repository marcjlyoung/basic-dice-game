import { mergeSchemas } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";

import resolvers from "./resolvers/resolvers";
import schemas from "./schemas/schema";

import { ConfigureDb } from "./database";

const schema: GraphQLSchema = mergeSchemas({
  schemas,
  resolvers,
});

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(async ({ url }) => {
  await ConfigureDb();
  console.log(`🚀  Server ready at ${url}`);
});
