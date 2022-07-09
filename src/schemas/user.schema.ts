import { GraphQLSchema } from "graphql";
import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type User {
      id: Int!
      name: String!
      balance: Float!
    }

    type Query {
      getUser(id: Int): User
      getUserList: [User!]
    }

    type Mutation {
      createUser(name: String!, balance: Float): User
    }
  `,
});

export default userSchema;
