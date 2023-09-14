import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User {
    _id:
    username
    email
    petLikes
    petDislikes
    numberCel
    state
    reasonsToGetPet
    age
    gender
  }
`;

export const QUERY_PETS = gql`
  query Pets {
    _id
    name
    picture
    breed
    owner
    userLikes
    userDislikes
  }
`;

export const QUERY_MATCHES= gql `
query Match($_id: String){
  Match (_id: $_id){
    userId
    petId
  }
}
`