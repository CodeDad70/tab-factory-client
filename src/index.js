import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store.js';


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render(
  <Router>
  <Provider store={store}>
    
    
    <App/>
      <Route path="/" render={Home} />
   
  </Provider>,   
  </Router>,
document.getElementById('root')
);

registerServiceWorker();
