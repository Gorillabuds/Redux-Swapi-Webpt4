import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';
import {homeReducer}from'./starWarsReducer';

export default combineReducers({
  charsReducer,homeReducer
});
