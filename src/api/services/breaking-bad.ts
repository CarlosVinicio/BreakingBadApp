import { addCharactersList } from "../../store/reducers/global";
import { replaceSpaces } from "../../utils/helpers/global";
import { Character } from "../../utils/interfaces/Api"
import { fetchAllCharacters, fetchCharacterById, fetchQuoteByAuthor } from "../resolvers/breaking-bad"

export const getAllCharacters = () => (dispatch:any) => {
  fetchAllCharacters().then((response: Character[]) => {
    dispatch(addCharactersList(response));
  }).catch((error: Error) => {
    throw error;
  });
};

export const getCharacterById = (characterId: string) => {
  return fetchCharacterById(characterId).then((response: Character[]) => {
    return response;
  }).catch((error: Error) => {
    throw error;
  });
};

export const getQuoteByAuthor = (author: string) => {
  const authorName = replaceSpaces(author);
  return fetchQuoteByAuthor(authorName).then((response: any) => {
    return response;
  }).catch((error: Error) => {
    throw error;
  });
};