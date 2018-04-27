import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import songs from './reducers/songs';
import song from './reducers/song';
import songFormData from './reducers/songFormData';
import lyrics from './reducers/lyrics';
import lyricFormData from './reducers/lyricFormData';
import lyric from './reducers/lyric';
import songEditData from './reducers/songEditData';
import lyricEditData from './reducers/lyricEditData';


const reducers = combineReducers({
  lyrics,
  lyricFormData,
  lyric,
  lyricEditData,
  songs,
  songFormData,
  song, 
  songEditData,
});

const middleware = [thunk];

export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
  
);