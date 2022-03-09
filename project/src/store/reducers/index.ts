import {combineReducers} from 'redux';
import cityReducer from './city-reducer';
import offersReducer from './offers-reducer';
import sortReducer from './sort-reducer';

const reducer = combineReducers({
  city: cityReducer.reducer,
  offers: offersReducer.reducer,
  sort: sortReducer.reducer,
});

export default reducer;
