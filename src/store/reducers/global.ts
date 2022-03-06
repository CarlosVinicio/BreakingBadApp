
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  language: "es",
  isFetching: false
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addCharactersList: (state, action) => {
      state.list = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  }
});

export const { 
  addCharactersList, 
  setLanguage, 
  setIsFetching 
} = globalSlice.actions;

export default globalSlice.reducer;