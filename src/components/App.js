import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SongsNew from '../containers/SongsNew';
import SongsPage from './SongsPage';
import SongsShow from '../containers/SongsShow';
import NavBar from '../containers/NavBar';
import EditPage from './EditPage';
import WelcomePage from './WelcomePage';
import ViewPage from './ViewPage';

import '../stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const App = (props) => 

  <Router>
    <div>
      
      <NavBar/>
      <Route exact path="/"  component={WelcomePage}/>
      <Route exact path="/songs/show"  component={SongsShow}/>
      <Route path="/songs" component={SongsPage} />
      <Route exact path="/new" component={SongsNew} />
      <Route exact path="/song/edit" component={EditPage}/>
      <Route exact path="/song/view" component={ViewPage}/>

    </div>
  
  </Router>;



export default App;