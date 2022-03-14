import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from '../../types/user';

const userReducer = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action:PayloadAction<User>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer;
