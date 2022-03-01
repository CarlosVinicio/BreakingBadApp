
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const charactersSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addCharactersList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { addCharactersList } = charactersSlice.actions;

export default charactersSlice.reducer;