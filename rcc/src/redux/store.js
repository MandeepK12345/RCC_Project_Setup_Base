import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});

export default store;
