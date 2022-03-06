import { 
  addCharactersList, 
  setAllEpisodes, 
  setRandomQuote,
  setQuoteByAuthor,
  setCharacterDetailById, 
  setIsFetching
} from "../../store/reducers/global";
import { getRandomQuote, replaceSpaces,  } from "../../utils/helpers/global";
import { Character, Episodes, Quote } from "../../utils/interfaces/Api"
import { 
  fetchAllCharacters, 
  fetchCharacterById, fetchQuoteByAuthor, fetchAllEpisodes } from "../resolvers/breaking-bad"

export const getAllCharacters = () => (dispatch:any) => {
  dispatch(setIsFetching(true))
  fetchAllCharacters().then((response: Character[]) => {
    dispatch(addCharactersList(response));
  }).catch((error: Error) => {
    throw error;
  }).finally(() => {
    dispatch(setIsFetching(false))
  })
};

export const getCharacterById = (characterId: string)  => (dispatch:any) => {
  dispatch(setIsFetching(true))
  return fetchCharacterById(characterId).then((response: Character[]) => {
    dispatch(setCharacterDetailById(response));
    dispatch(getQuoteByAuthor(response[0].name));
  }).catch((error: Error) => {
    throw error;
  }).finally(() => {
    dispatch(setIsFetching(false))
  })
};

export const getQuoteByAuthor = (author: string) => (dispatch:any) => {
  dispatch(setIsFetching(true))
  const authorName = replaceSpaces(author);
  return fetchQuoteByAuthor(authorName).then((response: Quote[]) => {
    const randomQuote = getRandomQuote(response);
    dispatch(setRandomQuote(randomQuote));
    dispatch(setQuoteByAuthor(response));
  }).catch((error: Error) => {
    throw error;
  }).finally(() => {
    dispatch(setIsFetching(false))
  })
};

export const getAllEpisodes = () => (dispatch:any) => {
  dispatch(setIsFetching(true))
  fetchAllEpisodes().then((response: Episodes[]) => {
    dispatch(setAllEpisodes(response));
  }).catch((error: Error) => {
    throw error;
  }).finally(() => {
    dispatch(setIsFetching(false))
  })
};