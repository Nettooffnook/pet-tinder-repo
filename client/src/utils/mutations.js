import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
      email
      password
      state
      gender
      reasontToGetPet
      age
      contactCel
    }
  }
`;

export const CREATE_PET = gql`
  mutation addPet($namePet: String!, $picturePet: String!, $breedPet: String!, $ownerPet: String!) {
    addPet(namePet: $namePet, picturePet: $picturePet, breedPet: $breedPet, ownerPet: $ownerPet) {
      namePet
      picturePet
      ownerPet
      breedPet
    }
  }
`;

export const CREATE_MATCHUP = gql `
 mutation createMatchup{
  userID
  petId
 }
`


