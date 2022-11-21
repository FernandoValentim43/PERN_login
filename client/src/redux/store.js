import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slicers/authSlice';

export const store = configureStore({
  reducer: {
   auth: authSlice
  },
});

