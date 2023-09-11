const { User, Pet } = require("../models");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {},
    pets: async (parent, args, context) => {},
    findPetByBreed: async (parent, args, context) => {},
    findPetByName: async (parent, args, context) => {},
    findPetById: async (parent, args, context) => {},
  },
  Mutation: {
    addUser: async (parent, args) => {},
    login: async (parent, args, ) => {},
    likePet: async (parent, args, context) => {},
    dislikePet: async (parent, args, context) => {},
    updateUser: async (parent, args, context) => {},
  },
};

module.exports = resolvers;
