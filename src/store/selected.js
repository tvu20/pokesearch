import { createSlice } from '@reduxjs/toolkit';

const initSelectedState = {
  id: '',
  name: '',
  height: '',
  weight: '',
  types: [],
  stats: [],
  sprites: {},
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState: initSelectedState,
  reducers: {
    change(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.height = action.payload.height;
      state.types = action.payload.types;
      state.stats = action.payload.stats;
      state.sprites = action.payload.sprites;
    },
  },
});

export const selectedActions = selectedSlice.actions;

export default selectedSlice.reducer;
