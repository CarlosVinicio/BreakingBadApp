import { Character, Episodes } from "./Api";
interface Global {
  list: Character[],
  language: string,
  episodes: Episodes[],
  isFetching: false,
}
export interface reduxState {
  global: Global
}