import { BASE_URL } from '../config';
import axios from 'axios';
import { Character } from '../../utils/interfaces/Api';
import { replaceSpaces } from '../../utils/helpers/global';

export const fetchAllCharacters = async () => {  
  const response = await axios.get<Character[]>(`${BASE_URL}/characters`);
  return response.data;  
}

export const fetchCharacterById = async (characterId: string) => {  
  const response = await axios.get<Character[]>(`${BASE_URL}/characters/${characterId}`);
  return response.data;  
}

export const fetchQuoteByAuthor = async (author: string) => {  
  const response = await axios.get(`${BASE_URL}/quote?author=${author}`);
  return response.data;  
}

export const fetchAllEpisodes = async () => {  
  const response = await axios.get(`${BASE_URL}/episodes`);
  return response.data;  
}