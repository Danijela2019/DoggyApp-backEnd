/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TDataSources, TArticleData, TDog, TBreed, TUser } from "./types";

export default {
  Query: {
    articles: (
      _: any,
      { recommended }: { recommended: boolean },
      { dataSources }: TDataSources
    ) => dataSources.articleAPI.getArticles(recommended),

    article: (
      _: any,
      { id }: { id: string },
      { dataSources }: TDataSources
    ): TArticleData => dataSources.articleAPI.getArticleByID(id),
    user: (
      _: any,
      { id }: { id: string },
      { dataSources }: TDataSources
    ): TUser => dataSources.userAPI.getUserByID(id),
    breed: (
      _: any,
      { id }: { id: string },
      { dataSources }: TDataSources
    ): TBreed => dataSources.breedAPI.getBreedByID(id),
    breeds: (_: any, __: any, { dataSources }: TDataSources): TBreed[] =>
      dataSources.breedAPI.getBreeds(),
  },
  /*   Mutation:{
    createUser: (_: any, {id, name, email, pet}:TUser, { dataSources }: TDataSources): TUser =>
    return dataSources.userAPI.createUser({id,name,email,pet})
  }, */
  User: {
    pets: (user: TUser, __: any, { dataSources }: TDataSources) =>
      dataSources.dogAPI.getDogByOwnerID(user.id),
  },
  Dog: {
    owner: (dog: TDog, __: any, { dataSources }: TDataSources) => {
      return dataSources.userAPI.getUserByID(dog.owner);
    },
    breed: (dog: TDog, __: any, { dataSources }: TDataSources): TBreed => {
      return dataSources.breedAPI.getBreedByID(dog.breed);
    },
  },
};
