import { createAsyncThunk } from '@reduxjs/toolkit';
// import {dropToken, saveToken} from '../services/token';
import { Offers } from '../types/offers';
// import { User } from '../types/user';
import {APIRoute} from '../utils/const';
import store, { api } from './index';
// import { setAuthStatus } from './reducers/auth-reducer';
import { setOffers } from './reducers/offers-reducer';
// import { setUser } from './reducers/user-reducer';


export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    // try {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    // console.log(data);
    store.dispatch(setOffers(data));
    // } finally {
    //
    // }
  },
);

// const checkAuthAction = createAsyncThunk(
//   'user/checkAuth',
//   async () => {
//     try {
//       await api.get(APIRoute.Login);
//       store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
//     } catch(error) {
//       store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
//     }
//   },
// );
//
// const loginAction = createAsyncThunk(
//   'user/login',
//   async () => {
//     try {
//       const {data} = await api.post<User>(APIRoute.Login);
//       saveToken(data.token);
//       store.dispatch(setUser(data));
//     } finally {
//
//     }
//   },
// );

// const logoutAction = createAsyncThunk(
//   'user/logout',
//   async () => {
//     try {
//       await api.delete(APIRoute.Logout);
//       dropToken();
//       store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
//     } finally {
//
//     }
//   },
// );
