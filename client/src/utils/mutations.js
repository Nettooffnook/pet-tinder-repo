import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($user1: String!, $user2: String!) {
    createMatchup(user1: $user1, user2: $user2) {
      _id
      user1
      user2
    }
  }
`;

export const CREATE_PET = gql`
  mutation createVote($_id: String!, $userNum: Int!) {
    createVote(_id: $_id, userNum: $userNum) {
      _id
      user1
      user2
      user1_pet
      user2_pet
    }
  }
`;
