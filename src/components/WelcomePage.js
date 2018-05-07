import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import {getSongs} from "../actions/songs"
import SongDelete from '../containers/SongDelete';

import EditButton from './EditButton'



class WelcomePage extends React.Component {
  
  
  render() {
    const logo = "gear-logo-icon-92970.png"
    const showAll = this.props.songs.map (song => 
     
     <div >
     
      <div className = "song-card">
         
      
              
      <div className="song-card-title">
        <h2>{song.name} by {song.artist}</h2> 
      </div>
      
      <div className="song-card-lyrics">
        <h4>{song.lyrics}</h4>
      </div>
  
      
        <SongDelete/> <EditButton/>
      
  
     
         </div>
         <br/><br/>
        
    </div>
    )
   
  
    return (
      
      
      <div className = "songtab">
          {showAll}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(WelcomePage);
