import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
