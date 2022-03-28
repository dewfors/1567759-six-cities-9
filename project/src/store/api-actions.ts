import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../services/error-handle';
import {dropToken, saveToken} from '../services/token';
import {Offer, Offers} from '../types/offers';
import { AuthData, UserData } from '../types/user-data';
import {AppRoute, APIRoute, AuthorizationStatus} from '../utils/const';
import store, { api } from './index';
import { redirectToRoute } from './reducers/actions';
import { setAuthStatus } from './reducers/auth-reducer';
import { loadOffersNearby } from './reducers/offers-nearby-reducer';
import { changeFavoriteStatus, setOffers } from './reducers/offers-reducer';
import { setUser } from './reducers/user-reducer';
import {CommentDataType, NewReview, Reviews} from '../types/review';
import { loadComments, resetComments } from './reducers/reviews-reducer';
import { NewStatus } from '../types/favorite-status';
import { loadOffersFavorites } from './reducers/offers-favorites';
import { AxiosInstance, AxiosResponse } from 'axios';
import { StateType } from '../types/stateType';


export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(setOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferNearbyAction =  createAsyncThunk(
  'data/fetchOffersNearby',
  async (currentId: number) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${currentId}/nearby`);
      store.dispatch(loadOffersNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (currentId: number) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${currentId}`);
      store.dispatch(resetComments());
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postCommentAction = (newReview: NewReview, setUserData: (userData: CommentDataType) => void ) => (nextDispatch: Dispatch, getState: () => StateType, getApi: AxiosInstance) => {
  getApi.post(`${APIRoute.Comments}/${newReview.id}`, newReview.review)
    .then((response: AxiosResponse) => {
      store.dispatch(fetchCommentsAction(newReview.id));
    })
    .catch((error) => {
      errorHandle(error);
      setUserData(newReview.review);
    });
};

export const fetchFavoriteAction = createAsyncThunk(
  'data/fetchFavoritesOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(AppRoute.Favorite);
      store.dispatch(loadOffersFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postFavoriteStatusAction = createAsyncThunk(
  'user/postFavoriteStatus',
  async (newStatus: NewStatus) => {
    api.post<Offer>(`${AppRoute.Favorite}/${newStatus.id}/${newStatus.status}`)
      .then(({data}) => {
        store.dispatch(changeFavoriteStatus(data));
      })
      .catch((error) => {
        errorHandle(error);
      });

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

export const getUserAction = createAsyncThunk(
  'user/login',
  async () => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      store.dispatch(setUser(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);


