import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import userReducer from './counter/userslice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add your reducers here
    user: userReducer,
    // Add your user reducer here
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// The store is the global state of the application