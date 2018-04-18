import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Songform from '../containers/Songform'
import SongsNew from '../containers/SongsNew';
import SongsPage from './SongsPage';
import SongsShow from '../containers/SongsShow';
import NavBar from '../containers/NavBar';
import '../stylesheets/App.css';



const App = (props) => 

  <Router>
    <div>

      
      <Route  path="/" component={NavBar}/>
      <Route exact path="/songs/show"  component={SongsShow}/>
      <Route path="/songs" component={SongsPage} />
      <Route exact path="/new" component={SongsNew} />
    
      

    </div>
  
  </Router>;



export default App;