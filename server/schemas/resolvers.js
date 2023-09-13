const { User, Pet } = require("../models");


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    pets: async () => {
      return await Pet.find({});
    },
    matches: async (parent, { _id }) => {
      return await User.find({ _id }).populate("pets")
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const createUser = await User.create(args);
      return createUser
    },
    addPet: async (parent, args) => {
      const createPet = await Pet.create(args);
      return createPet
    },
    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    
    petLikes: async (parent, { petLikes }) => {
      const pLikes = await User.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: { petLikes: petLikes }
        },
        { new: true }
      );
      return pLikes
    },
    petDislikes: async (parent, { petDislikes }) => {
      const pDislikes = await User.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: { petDislikes: petDislikes }
        },
        { new: true }
      );
      return pDislikes
    },
    userLikes: async (parent, { userLikes }) => {
      const uLikes = await Pet.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: { userLikes: userLikes }
        },
        { new: true }
      );
      return uLikes
    },
    userDislikes: async (parent, { userDislikes }) => {
      const uDislikes = await Pet.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: { userDislikes: userDislikes }
        },
        { new: true }
      );
      return uDislikes
    },
  },
};

module.exports = resolvers;
