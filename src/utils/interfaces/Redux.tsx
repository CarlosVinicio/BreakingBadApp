import { Character } from "./Api";
interface List {
  list: Character[]
}
interface Characters {
  list: List
}
export interface reduxState {
  characters: Characters
}