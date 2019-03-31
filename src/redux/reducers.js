import { combineReducers } from 'redux';

import user from './modules/user';
import search from './modules/search';
import post from './modules/post';

export default combineReducers({
  user,
  search,
  post,
});
