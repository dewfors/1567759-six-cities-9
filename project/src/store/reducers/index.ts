import {combineReducers} from 'redux';
import cityReducer from './city-reducer';
import offersReducer from './offers-reducer';

const reducer = combineReducers({
  city: cityReducer.reducer,
  offers: offersReducer.reducer,
});

export default reducer;
