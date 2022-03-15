import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../services/error-handle';
import {saveToken} from '../services/token';
import { Offers } from '../types/offers';
// import { User } from '../types/user';
import { AuthData, UserData } from '../types/user-data';
import {AppRoute, APIRoute, AuthorizationStatus} from '../utils/const';
import store, { api } from './index';
import { redirectToRoute } from './reducers/actions';
import { setAuthStatus } from './reducers/auth-reducer';
import { setOffers } from './reducers/offers-reducer';
// import { setUser } from './reducers/user-reducer';


export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      // console.log(data);
      store.dispatch(setOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

// export const logoutAction = createAsyncThunk(
//   'user/logout',
//   async () => {
//     try {
//       await api.delete(APIRoute.Logout);
//       dropToken();
//       store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
//     } catch (error) {
//       errorHandle(error);
//     }
//   },
// );
