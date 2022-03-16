import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Reviews} from '../../types/review';

type initialStateCommentsType = {
  comments: Reviews | [],
}

const initialState: initialStateCommentsType = {
  comments: [],
};

const commentsReducer = createSlice({
  name: 'stateComments',
  initialState,
  reducers: {
    loadComments: (state, action:PayloadAction<Reviews>) => {
      state.comments = action.payload;
      return state;
    },
    resetComments: (state) => {
      state.comments = [];
      return state;
    },
  },
});

export const { loadComments, resetComments } = commentsReducer.actions;

export default commentsReducer;
