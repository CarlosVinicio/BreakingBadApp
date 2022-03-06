import { BASE_URL } from '../config';
import { Character } from '../../utils/interfaces/Api';
import customAxios from '../index';

export const fetchAllCharacters = async () => {  
  const response = await customAxios.get<Character[]>(`${BASE_URL}/characters`);
  return response.data;  
}

export const fetchCharacterById = async (characterId: string) => {  
  const response = await customAxios.get<Character[]>(`${BASE_URL}/characters/${characterId}`);
  return response.data;  
}

export const fetchQuoteByAuthor = async (author: string) => {  
  const response = await customAxios.get(`${BASE_URL}/quote?author=${author}`);
  return response.data;  
}

export const fetchAllEpisodes = async () => {  
  const response = await customAxios.get(`${BASE_URL}/episodes`);
  return response.data;  
}

export const fetCharacterByName = async (name: string) => {  
  const response = await customAxios.get(`${BASE_URL}/characters?name=${name}`);
  return response.data;  
}
