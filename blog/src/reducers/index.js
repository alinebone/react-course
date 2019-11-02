import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

export default combineReducers({
  i: () => 0,
  posts: 'oi'
});