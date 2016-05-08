import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './posts';
import itemReducer from './items';
import tagReducer from './tags';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  items: itemReducer,
  tags: tagReducer
});

export default rootReducer;
