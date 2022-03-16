import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offers';

type initialStateOffersNearbyType = {
  offersNearby: Offers | [],
}

const initialState: initialStateOffersNearbyType = {
  offersNearby: [],
};

const offersNearbyReducer = createSlice({
  name: 'stateOffersNearby',
  initialState,
  reducers: {
    loadOffersNearby: (state, action:PayloadAction<Offers>) => {
      state.offersNearby = action.payload;
      return state;
    },
  },
});

export const { loadOffersNearby } = offersNearbyReducer.actions;

export default offersNearbyReducer;
