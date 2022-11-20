import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slicers/authSlice.js';

export const store = configureStore({
  reducer: {
   auth: authSlice
  },
});

