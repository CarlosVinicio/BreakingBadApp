import { Character, Episodes } from "./Api";
interface Global {
  list: Character[],
  language: string,
  episodes: Episodes[],
  randomQuote: any,
  quoteByAuthor: any,
  characterById: any,
  isFetching: false,
}
export interface reduxState {
  global: Global
}