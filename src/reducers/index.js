import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import filmsReducer from './filmsReducer';

export default combineReducers({
  people: peopleReducer,
  films: filmsReducer,
});
