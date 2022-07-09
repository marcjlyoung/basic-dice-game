import { createUser, getUser, getUserById, getUsers } from "../models/User";

const userResolver = {
  Query: {
    getUser: async (_parent: undefined, { id }: { id?: number }) => {
      if (!id) return getUser();

      return getUserById(id);
    },

    getUserList: () => getUsers(),
  },

  Mutation: {
    createUser: async (
      _parent: undefined,
      { name, balance }: { name: string; balance?: number }
    ) => createUser(name, balance),
  },
};

export default userResolver;
