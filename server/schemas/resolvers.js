const { User, Pet } = require("../models");


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    pets: async () => {
      return await Pet.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      return await User.create(args);
    },
    addPet: async (parent, args) => {
      return await Pet.create(args);
    },
    petLikes: async (parent, { petLikes }) => {
      await User.findOne({ petLikes });
      return
    },
    petDislikes: async (parent, { petDislikes }) => {
      await User.findOne({ petDislikes });
      return
    },
    userLikes: async (parent, { userLikes }) => {
      await Pet.findOne({ userLikes });
      return
    },
    userDislikes: async (parent, { userDislikes }) => {
      await Pet.findOne({ userDislikes });
      return
    },
  },
};

module.exports = resolvers;
