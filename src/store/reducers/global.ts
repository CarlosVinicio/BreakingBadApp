
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  language: "es"
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
  }
});

export const { addCharactersList, setLanguage } = globalSlice.actions;

export default globalSlice.reducer;