import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SongsNew from '../containers/SongsNew';
import SongsPage from './SongsPage';
import SongsShow from '../containers/SongsShow';
import NavBar from '../containers/NavBar';
import LyricsNew from '../containers/LyricsNew'
import '../stylesheets/App.css';



const App = (props) => 

  <Router>
    <div>
      
      <NavBar/>
      <Route exact path="/songs/show"  component={SongsShow}/>
      <Route path="/songs" component={SongsPage} />
      <Route exact path="/new" component={SongsNew} />
      <Route exact path="/lyrics" component={LyricsNew}/>

    </div>
  
  </Router>;



export default App;