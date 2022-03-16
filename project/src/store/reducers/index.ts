import {combineReducers} from 'redux';
import cityReducer from './city-reducer';
import offersReducer from './offers-reducer';
import sortReducer from './sort-reducer';
import authorizationStatusReducer from './auth-reducer';
import userReducer from './user-reducer';
import offersNearbyReducer from './offers-nearby-reducer';
import commentsReducer from './reviews-reducer';

const reducer = combineReducers({
  city: cityReducer.reducer,
  stateOffers: offersReducer.reducer,
  stateOffersNearby: offersNearbyReducer.reducer,
  stateComments: commentsReducer.reducer,
  sort: sortReducer.reducer,
  authorizationStatus: authorizationStatusReducer.reducer,
  user: userReducer.reducer,
});

export default reducer;
