import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { updateSong } from '../actions/songs';
import SongEdit from '../containers/SongEdit';



class WelcomePage extends React.Component {
  
  
  render() {
  
    return (
      <div>
       <h1>Test</h1> 
          
      </div>
    )
  }
}

export default WelcomePage;
