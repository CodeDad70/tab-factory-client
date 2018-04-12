import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Songform from '../containers/Songform'
import SongsNew from '../containers/SongsNew';
import NavBar from '../containers/NavBar';
import Welcome from './Welcome';
import '../stylesheets/App.css';



const App = (props) => 

  <Router>
    <div>

      
      <Route exact path="/" component={Welcome}/>
      
      <Route path="/songs" component={NavBar} />
      <Route path="/new" component={SongsNew} />
    
      

    </div>
  
  </Router>;



export default App;