import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../utils/const';

type initialStateAuthType = {
  status: AuthorizationStatus,
}

const initialState: initialStateAuthType = {
  status: AuthorizationStatus.Unknown,
};

const authorizationStatusReducer = createSlice({
  name: 'authorizationStatus',
  initialState,
  reducers: {
    setAuthStatus: (state, action:PayloadAction<AuthorizationStatus>) => {
      state.status = action.payload;
      return state;
    },
  },
});

export const { setAuthStatus } = authorizationStatusReducer.actions;

export default authorizationStatusReducer;
