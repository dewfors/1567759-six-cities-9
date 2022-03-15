import {combineReducers} from 'redux';
import cityReducer from './city-reducer';
import offersReducer from './offers-reducer';
import sortReducer from './sort-reducer';
import authorizationStatusReducer from './auth-reducer';

const reducer = combineReducers({
  city: cityReducer.reducer,
  stateOffers: offersReducer.reducer,
  sort: sortReducer.reducer,
  authorizationStatus: authorizationStatusReducer.reducer,
});

export default reducer;
