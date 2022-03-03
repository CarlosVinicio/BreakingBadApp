import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/global';

const reducer = {
  global: apiReducer
};

export const store = configureStore({ reducer });