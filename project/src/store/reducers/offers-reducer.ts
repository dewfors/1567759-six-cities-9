import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offers';

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
  },
});

export const { setOffers } = offersReducer.actions;

export default offersReducer;
