import { combineReducers } from 'redux';

import user from './modules/user';
import search from './modules/search';
import post from './modules/post';
import posts from './modules/posts';

export default combineReducers({
  user,
  search,
  post,
  posts,
});
