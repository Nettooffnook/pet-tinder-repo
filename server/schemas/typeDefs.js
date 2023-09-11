const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User{
  _id: ID!
  username: String!
  email: String!
  petLikes: [Pet]
  petDislikes: [Pet]
  address: String!
  city: String!
  state: String!
  reasonsToGetPet: String!
  age: Int!
  gender: String
}

type Pet{
  _id: ID!
  name: String
  picture: String
  breed: String
  owner: User
  userLikes: [User]
  userDislikes: [User]
  matches: [User]
}

# type Match {
#   userID: String
#   petId: String
# }

type Auth{
  token: ID!
  user: User
}

type Query{
  users: [User]
  pets: [Pet]
  findPetByBreed(breed: String!): [Pet]
  findPetByName(name: String!): [Pet]
  findPetById(_id: ID!): Pet
  # findMatches: [Match]
}

type Mutation{
addUser(): Auth
login(): Auth
updateUser(): User
likePet(): User
dislikePet(): User
}
`;

module.exports = typeDefs;
