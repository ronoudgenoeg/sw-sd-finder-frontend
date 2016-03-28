import {combineReducers} from 'redux';
import region from './regionReducer';
import dungeon from './dungeonReducer';
import openDungeon from './openDungeonReducer';
const config = (state = {}) => state;

export default combineReducers({
  config,
  region,
  dungeon,
  openDungeon
});
