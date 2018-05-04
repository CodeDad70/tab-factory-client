import React from 'react';
import { connect } from 'react-redux';
import SongDelete from './SongDelete';
import {currentSong} from '../actions/song';
import EditButton from '../components/EditButton'


class SongsShow extends React.Component { 

  
  
  render() {
    this.props.currentSong(this.props.song);
    const renderLyrics = this.props.song.lyrics.map(lyric =>
    
    <div>
    <td> 
     
     
      <tr className="chordfont">{lyric.chords}</tr>
      <tr><h2 key={lyric.id}>{lyric.words}</h2></tr>
     
    
    </td>
    
    </div>

);

  return ( 
      
    
  <div className = "songtab">
     
    <div className = "song-card">
       
    
            
    <div className="song-card-title">
      <h1>{this.props.song.name} by {this.props.song.artist}</h1> 
    </div>
    
    <div className="song-card-lyrics">
    {renderLyrics}
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
      lyrics: state.lyrics,
      lyric: state.lyric 
    };
  }

export default connect(mapStateToProps, {currentSong})(SongsShow);