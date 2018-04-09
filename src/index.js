import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store.js';


ReactDOM.render(
  
  <Provider store={store}>
    <App/>
  </Provider>,   
 
document.getElementById('root')
);

registerServiceWorker();
