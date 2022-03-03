import { Character } from "./Api";
interface Global {
  list: Character[],
  language: string
}
export interface reduxState {
  global: Global
}