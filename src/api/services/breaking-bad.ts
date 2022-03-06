import { addCharactersList } from "../../store/reducers/global";
import { replaceSpaces } from "../../utils/helpers/global";
import { Character, Episodes, Quote } from "../../utils/interfaces/Api";
import {
  fetchAllCharacters,
  fetchCharacterById,
  fetchQuoteByAuthor,
  fetchAllEpisodes,
  fetCharacterByName,
} from "../resolvers/breaking-bad";

export const getAllCharacters = () => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  fetchAllCharacters()
    .then((response: Character[]) => {
      dispatch(addCharactersList(response));
    })
    .catch((error: Error) => {
      throw error;
    });
};

export const getCharacterById = (characterId: string) => {
  return fetchCharacterById(characterId)
    .then((response: Character[]) => {
      return response;
    })
    .catch((error: Error) => {
      throw error;
    });
};

export const getQuoteByAuthor = (author: string) => {
  const authorName = replaceSpaces(author);
  return fetchQuoteByAuthor(authorName)
    .then((response: Quote[]) => {
      return response;
    })
    .catch((error: Error) => {
      throw error;
    });
};

export const getAllEpisodes = () => {
  return fetchAllEpisodes()
    .then((response: Episodes[]) => {
      return response;
    })
    .catch((error: Error) => {
      throw error;
    });
};

export const getCharacterByName = (name: string) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  return fetCharacterByName(name)
    .then((response: Character[]) => {
      dispatch(addCharactersList(response));
    })
    .catch((error: Error) => {
      throw error;
    });
};
