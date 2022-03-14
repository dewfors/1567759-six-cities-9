import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offers';
// import {offers} from '../../mocks/offers';

type initialStateType = Offers | [];

const initialState: initialStateType = [];

const offersReducer = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action:PayloadAction<Offers>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setOffers } = offersReducer.actions;

export default offersReducer;
