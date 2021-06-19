import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from './selected';

const store = configureStore({
  reducer: { selected: selectedReducer },
});

export default store;
