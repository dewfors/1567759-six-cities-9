import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const sortReducer = createSlice({
  name: 'sort',
  initialState: 'popular',
  reducers: {
    setSortType: (state, action:PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {setSortType} = sortReducer.actions;

export default sortReducer;
