import { createSlice } from '@reduxjs/toolkit';

const initSelectedState = {
  show: false,
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
      state.weight = action.payload.weight;
      state.types = action.payload.types;
      state.stats = action.payload.stats;
      state.sprites = action.payload.sprites;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const selectedActions = selectedSlice.actions;

export default selectedSlice.reducer;
