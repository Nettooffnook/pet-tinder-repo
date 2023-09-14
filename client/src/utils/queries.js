import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
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
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      user1
      user2
      user1_pet
      user2_pet
    
    }
  }
`;
