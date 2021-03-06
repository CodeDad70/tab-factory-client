import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import songs from './reducers/songs';
import songFormData from './reducers/songFormData';
import songEditData from './reducers/songEditData';

const reducers = combineReducers({
  songs,
  songFormData,
  songEditData,
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);