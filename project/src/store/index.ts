import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import {createAPI} from '../services/api';
import {redirect} from './middleware/redirect';

export const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;
