import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import { postsApi } from '../services/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loansApi } from '../services/loansApi';
import { interestApi } from '../services/interestsApi';

export const store = configureStore({
  reducer: {
    loginReducer,
    [postsApi.reducerPath]:postsApi.reducer,
    [loansApi.reducerPath]:loansApi.reducer,
    [interestApi.reducerPath]:interestApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(postsApi.middleware,loansApi.middleware,interestApi.middleware)
})
setupListeners(store.dispatch)