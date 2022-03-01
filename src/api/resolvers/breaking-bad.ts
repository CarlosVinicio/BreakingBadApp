import { BASE_URL } from '../config';
import axios from 'axios';
import { Character } from '../../utils/interfaces/Api';

export const fetchAllCharacters = async () => {  
  const response = await axios.get<Character[]>(`${BASE_URL}/characters`);
  return response.data;  
}