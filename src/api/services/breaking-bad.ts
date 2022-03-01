import { addCharactersList } from "../../store/reducers/global";
import { Character } from "../../utils/interfaces/Api"
import { fetchAllCharacters } from "../resolvers/breaking-bad"

export const getAllCharacters = () => (dispatch:any) => {
  fetchAllCharacters().then((response: Character[]) => {
    dispatch(addCharactersList(response));
  }).catch(error => {
    console.log(error);
  })
};