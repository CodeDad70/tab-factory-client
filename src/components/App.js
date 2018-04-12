import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Songform from '../containers/Songform'
import SongsNew from '../containers/SongsNew';
import NavBar from '../containers/NavBar';
import Welcome from './Welcome';
import '../stylesheets/App.css';

const logo = "gear-logo-icon-92970.png"

const App = (props) => 

  <Router>
    <div>

      <div className = "Logo">
        <h1>The Tab Factory
        <img src={`/${logo}`} width="30px" height = "30px" alt="Gear Logo" className = "App-logo"/>
        </h1>
      </div>
      <Route exact path="/" component={Welcome}/>
      
      <Route path="/songs" component={NavBar} />
      <Route path="/song/new" component={SongsNew} />
    
      

    </div>
  
  </Router>;



export default App;