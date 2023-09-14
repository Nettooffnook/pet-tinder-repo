const { gql } = require("apollo-server-express");

// localhosthost:3001/graphql

const typeDefs = gql`
type User{
  _id: ID!
  username: String!
  email: String!
  petLikes: [Pet]
  petDislikes: [Pet]
  numberCel: String!
  state: String!
  reasonsToGetPet: String!
  age: Int!
  gender: String!
}

type Pet{
  _id: ID!
  name: String
  picture: String
  breed: String
  owner: [User]
  userLikes: [User]
  userDislikes: [User]
  matches: [User]
}

type Match {
  userID: String
   petId: String
 }

type Auth{
  token: ID!
  user: [User]
}

type Query{
  users: [User]
  pets: [Pet]
  matches: [Match]
}

type Mutation{
addUser: Auth
login: Auth
petLikes: User
petDislikes: User
addPet: Pet
userLikes: User
userDislikes: User
}
`;

module.exports = typeDefs;
