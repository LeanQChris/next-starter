export const baseUrl: string = process.env.baseUrl ?? "";

export const endpoints = {
  auth: {
    signIn: ""
  },
  rickAndMorty: {
    characters: "https://rickandmortyapi.com/api/character",
    episodes: "https://rickandmortyapi.com/api/episode"
  }
}