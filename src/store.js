import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import songs from './reducers/songs';
import songFormData from './reducers/songFormData';


const reducers = combineReducers({
  songs,
  songFormData
});

const middleware = [thunk];

export default createStore (
  reducers,
  applyMiddleware(...middleware)
);