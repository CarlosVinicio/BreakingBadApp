
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  language: "es",
  episodes: [],
  randomQuote: '',
  quoteByAuthor: null,
  characterById: null,
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
    setAllEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    setRandomQuote: (state, action) => {
      state.randomQuote = action.payload;
    },
    setQuoteByAuthor: (state, action) => {
      state.quoteByAuthor = action.payload;
    },
    setCharacterDetailById: (state, action) => {
      state.characterById = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  }
});

export const { 
  addCharactersList, 
  setLanguage, 
  setAllEpisodes, 
  setRandomQuote,
  setQuoteByAuthor,
  setCharacterDetailById,
  setIsFetching 
} = globalSlice.actions;

export default globalSlice.reducer;