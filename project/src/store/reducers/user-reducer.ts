import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserData} from '../../types/user-data';

export const DEFAULT_USER = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
  token: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: DEFAULT_USER,
  reducers: {
    setUser: (state, action:PayloadAction<UserData>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer;
