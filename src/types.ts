export type TArticleData = {
    id: string
    content: string
    title: string
    readTime: number
    views: number
    imgUri: string
    recommended: boolean
}
export type TDog = {
    id:string,
    owner:string,
    name:string,
    gender:string,
    breed:string,
    age:number,
}
export type TUser = {
    id:string,
    email:string
    name: string
    pet:string[]
}
export type TBreed = {
    breedID:string
    breedName:string
}

export type TDataSources = {
    dataSources: {
        articleAPI: {
            store: TArticleData[]
            getArticles: (recommended: boolean) => TArticleData[]
            getArticleByID: (id: string) => TArticleData
        }
        dogAPI: {
            store: TDog[]
            getDogByOwnerID:(id:string) => TDog
        }
        userAPI: {
            store:TUser[]
            getUserByID:(id:string) => TUser
            createUser:(name:string, email:string, id:string, pet:string[]) => TUser
        }
        breedAPI: {
            store: TBreed[]
            getBreeds:() => TBreed[]
            getBreedByID:(id:string) => TBreed
        }
    }
}
