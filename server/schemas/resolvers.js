const { User, Pet } = require("../models");


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    pets: async () => {
      return await Pet.find({});
    },
    matches:async()=>{
      return await User.find({_id}).populate("pets")
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      return await User.create(args);
    },
    addPet: async (parent, args) => {
      return await Pet.create(args);
    },
    petLikes: async (parent, { petLikes }) => {
      const pLikes = await User.findOneAndUpdate({ petLikes });
      return pLikes
    },
    petDislikes: async (parent, { petDislikes }) => {
      const pDislikes = await User.findOneAndUpdate({ petDislikes });
      return pDislikes
    },
    userLikes: async (parent, { userLikes }) => {
      const uLikes = await Pet.findOneAndUpdate({ userLikes });
      return uLikes
    },
    userDislikes: async (parent, { userDislikes }) => {
     const uDislikes = await Pet.findOneAndUpdate({ userDislikes });
      return uDislikes
    },
  },
};

module.exports = resolvers;
