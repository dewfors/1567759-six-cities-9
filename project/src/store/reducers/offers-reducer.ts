import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../../types/offers';

type initialStateOffersType = {
  isDataLoaded: boolean,
  offers: Offers | [],
}

const initialState: initialStateOffersType = {
  isDataLoaded: false,
  offers: [],
};

const offersReducer = createSlice({
  name: 'stateOffers',
  initialState,
  reducers: {
    setOffers: (state, action:PayloadAction<Offers>) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
      return state;
    },
    changeFavoriteStatus: (state, action:PayloadAction<Offer>) => {
      state.offers.forEach((item, i, arr) => {
        if (item.id === action.payload.id) {
          item.isFavorite = action.payload.isFavorite;
        }
      });

      return state;
    },
  },
});

export const { setOffers, changeFavoriteStatus } = offersReducer.actions;

export default offersReducer;
