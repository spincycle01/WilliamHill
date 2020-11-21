import { combineReducers } from 'redux';
import teamReducer from 'reducers/reducers';

export default combineReducers({
  teams: teamReducer,
});
