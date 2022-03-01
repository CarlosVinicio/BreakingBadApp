import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/global';

const reducer = {
  characters: apiReducer
};

export const store = configureStore({ reducer });