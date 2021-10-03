const { User, Place } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// NOTES
// resolvers is an object with a query nested inside that holds a series of methods
// these methods get the same name of the query or mutation they are resolvers

const resolvers = {
  Query: {
    // Test Query for "Hello World"
    helloWorld: () => {
      return 'Hello World';
    },

    // Logged in user information
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // -=- User Resolvers -=- //
    users: async () => {
      return User.find()
        .select('-__v -password')
    },

    // Getting user by email
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
    },

    // Getting birthworker by email
    // place: async (parent, { email }) => {
    //   return Place.findOne({ email })
    //     .select('-__v -password')
    //     // .populate('place')
    // },

    // places: async () => {
    //   return Place.find()
    //     .select('-__v -password')
    //     // .populate('place')
    // },
  },

  Mutation: {
    // -=- User Mutations -=-
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    userLogin: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    // addPlace: async (parent, args) => {
    //   const place = await Place.create(args);
    //   // const token = signToken(birthworker);
    //   return { place };
    // }
  }
};

module.exports = resolvers;