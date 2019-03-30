import { combineReducers } from 'redux';

import user from './modules/user';
import search from './modules/search';

export default combineReducers({
  user,
  search,
});
