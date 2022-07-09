import { GraphQLSchema } from "graphql";
import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";

const betSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Bet {
      id: Int!
      betAmount: Float!
      chance: Float!
      payout: Float!
      win: Boolean!
      userId: Int!
    }

    type Query {
      getBet(id: Int): Bet
      getBetList: [Bet!]
      getBestBetPerUser(limit: Int): [Bet!]
    }

    type Mutation {
      createBet(userId: Int!, betAmount: Float!, chance: Float!): Bet
    }
  `,
});

export default betSchema;
