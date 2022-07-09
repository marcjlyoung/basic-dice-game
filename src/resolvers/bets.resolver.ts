import { getBet, getBetById, getBets, getBestBetPerUser } from "../models/Bet";
import { getUserById } from "../models/User";
import { handleBet } from "../services/bet.service";

const betResolver = {
  Query: {
    getBet: async (_parent: undefined, { id }: { id?: number }) => {
      if (!id) return getBet();

      return getBetById(id);
    },

    getBetList: () => getBets(),

    getBestBetPerUser: async (
      _parent: undefined,
      { limit }: { limit?: number }
    ) => getBestBetPerUser(limit),
  },

  Mutation: {
    createBet: async (
      _parent: undefined,
      {
        userId,
        betAmount,
        chance,
      }: { userId: number; betAmount: number; chance: number }
    ) => {
      const user = await getUserById(userId);

      if (!user) throw Error("Invalid User");

      if (user.balance < betAmount) throw new Error("Insufficient Balance");

      return await handleBet(user, betAmount, chance);
    },
  },
};

export default betResolver;
