const { gql } = require("apollo-server-express");

// localhosthost:3001/graphql

const typeDefs = gql`
type User{
  _id: ID!
  username: String!
  email: String!
  password: String! 
  state: String!
  reasonsToGetPet: String!
  age: Int!
  gender: String!
  contactCel: Int!
}

type UserLikes {
  petLikes: [Pet]
  petDislikes: [Pet]
}

type Pet{
  _id: ID!
  namePet: String!
  picturePet: String!
  breedPet: String!
  ownerPet: User

}

type PetLikes {
  userLikes: [User]
  userDislikes: [User]
}

type Match {
  userID: String!
   petId: String!
 }

type Auth{
  token: ID!
  user: User
}

type Query{
  users: [User]
  user(username: String!): User
  pets: [Pet]
  matches: [Match]
  me: User
}

type Mutation{
addUser(username: String!,  email: String!, password: String!,state: String!, gender: String!, reasonsToGetPet: String!,age: Int!,contactCel: Int!): Auth
login(username: String!,password: String!): Auth
addPet(namePet: String!, picturePet: String!, breedPet: String!, ownerPet: String!): User
petLikes(namePet: String!): User
petDislikes(namePet: String!): User
userLikes(username: String!): Pet
userDislikes(username: String!): Pet
}
`;

module.exports = typeDefs;
