const { User, Pet } = require("../models");
const {signToken} =  require ("../utils/auth")
const { AuthenticationError } = require('apollo-server');


const resolvers = {
  // GET REQUESTS
  Query: {
    users: async () => {
      return await User.find();
    },
    pets: async () => {
      return await Pet.find();
    },
    matches: async (parent, { _id }) => {
      return await User.find({ _id }).populate("pets")
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('pets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  // ADD, UPDATE, DELETE LIKE POST, PUT, AND DELETE REQUESTS FOR RESTFUL API
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    addPet: async (parent, args) => {
      const createPet = await Pet.create(args);
      return createPet
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    petLikes: async (parent, { petLikes }) => {
      const pLikes = await User.findOneAndUpdate(
        {_id: User.Id},
        {
          $addToSet: { petLikes: petLikes }
        },
        { new: true }
      );
      return pLikes
    },
    petDislikes: async (parent, { petDislikes }) => {
      const pDislikes = await User.findOneAndUpdate(
        {_id: User.Id},
        {
          $addToSet: { petDislikes: petDislikes }
        },
        { new: true }
      );
      return pDislikes
    },
    userLikes: async (parent, { userLikes }) => {
      const uLikes = await Pet.findOneAndUpdate(
        {_id: Pet.Id},
        {
          $addToSet: { userLikes: userLikes }
        },
        { new: true }
      );
      return uLikes
    },
    userDislikes: async (parent, { userDislikes }) => {
      const uDislikes = await Pet.findOneAndUpdate(
        {_id: Pet.Id},
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
