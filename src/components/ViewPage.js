import React from 'react';
import { connect } from 'react-redux';
import SongDelete from '../containers/SongDelete';
import {currentSong} from '../actions/song';
import EditButton from './EditButton'
import { getSongs } from '../actions/songs';

class ViewPage extends React.Component { 

  
  
  render() {

    

  return ( 
      
    
  <div className = "songtab">
     
    <div className = "song-card">
       
    
            
    <div className="song-card-title">
      <h2>{this.props.song.name} by {this.props.song.artist}</h2> 
    </div>
    
    <div className="song-card-lyrics">
      <h4>{this.props.song.lyrics}</h4>
    </div>

    
      <SongDelete/> <EditButton/>
    

   
       </div>
      
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs
  };
}



export default connect(mapStateToProps, 
  {currentSong,
    getSongs,
  })(ViewPage);

