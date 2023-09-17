import { gql } from '@apollo/client';

export const QUERY_CREATEUSER = gql`
    mutation addUser($username:String!,$email:String!,$password:String!)
    addUser(username:$username , email=$email , password=$password){
      username
      email
      password
      state
      gender
      reasontToGetPet
      age
      contactCel
    }
`;

export const QUERY_CREATEPET = gql `
mutation addPet(namePet=String!,picturePet=String!, breedPet=String! ownerPet= String!)
addPet (namePet=$namePet, picturePet-$picturePet, breedPet=$breedPet, ownerPet=$ownerPet){
  namePet
  picturePet
  ownerPet
  breedPet
}
`;


