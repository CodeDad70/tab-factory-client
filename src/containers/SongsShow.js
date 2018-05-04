import React from 'react';
import { connect } from 'react-redux';
import SongDelete from './SongDelete';
import {currentSong} from '../actions/song';
import EditButton from '../components/EditButton'


class SongsShow extends React.Component { 

  
  
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

const mapStateToProps = (state, ownProps) => {
  const song = state.songs.find(song => song.id == ownProps.match.params.songId);
    return {
      song,
      songs: state.songs, 
    };
  }

export default connect(mapStateToProps, {currentSong})(SongsShow);