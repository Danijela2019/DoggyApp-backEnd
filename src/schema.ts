import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    article(id: ID!): Article!
    articles(recommended: Boolean): [Article]!
    user(id: ID): User
    breeds: [Breed!]!
    breed(id:ID!):Breed
  }

  type Article {
    id: ID!
    content: String
    title: String
    readTime: Int
    views: Int
    imgUri: String
    recommended: Boolean
  }
  type User {
    id: ID!
    pets: [Dog]!
    name: String
    email: String
  }
  type Breed {
      breedID:ID!
      breedName:String
  }
  type Dog {
    id: ID!
    owner: User!
    name: String!
    breed: Breed!
    gender: DogGender!
    age: Int
  }

  enum DogGender {
    MALE
    FEMALE
  }
`;

export default typeDefs;
