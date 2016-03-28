import {combineReducers} from 'redux';
import region from './regionReducer';
const config = (state = {}) => state;

export default combineReducers({
  config,
  region
});
