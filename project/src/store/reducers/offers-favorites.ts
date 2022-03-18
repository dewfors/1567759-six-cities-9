import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offers';

type initialStateOffersoffersFavoritesType = {
  offersFavorites: Offers | [],
}

const initialState: initialStateOffersoffersFavoritesType = {
  offersFavorites: [],
};

const offersFavoritesReducer = createSlice({
  name: 'stateOffersFavorites',
  initialState,
  reducers: {
    loadOffersFavorites: (state, action:PayloadAction<Offers>) => {
      state.offersFavorites = action.payload;
      return state;
    },
  },
});

export const { loadOffersFavorites } = offersFavoritesReducer.actions;

export default offersFavoritesReducer;
