import {combineReducers} from 'redux';
import cityReducer from './city-reducer';
import offersReducer from './offers-reducer';
import sortReducer from './sort-reducer';
import authorizationStatusReducer from './auth-reducer';
import userReducer from './user-reducer';

const reducer = combineReducers({
  city: cityReducer.reducer,
  stateOffers: offersReducer.reducer,
  sort: sortReducer.reducer,
  authorizationStatus: authorizationStatusReducer.reducer,
  user: userReducer.reducer,
});

export default reducer;
