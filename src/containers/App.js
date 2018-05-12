import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Songform from './Songform';
import SongsPage from './SongsPage';
import SongsShow from './SongsShow';
import NavBar from './NavBar';
import SongEdit from './SongEdit';
import WelcomePage from './WelcomePage';
import DeleteSong from './DeleteSong';

import '../stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const App = (props) => 

  <Router>
    <div>  
      <NavBar/>
      <Route exact path="/"  component={WelcomePage}/>
      <Route exact path="/deleted"  component={WelcomePage}/>
      <Route exact path="/songs/show"  component={SongsShow}/>
      <Route path="/songs" component={SongsPage} />
      <Route exact path="/new" component={Songform} />
      <Route exact path="/songs/:id/edit" component={SongEdit} />
      <Route exact path="/songs/:id/delete" component={DeleteSong} />
      
    </div>
  </Router>;

export default App;