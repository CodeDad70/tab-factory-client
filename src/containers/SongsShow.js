import React from 'react';
import { connect } from 'react-redux';
import SongDelete from './SongDelete';
import {currentSong} from '../actions/song'


class SongsShow extends React.Component { 

  componentDidMount() {
    this.props.currentSong(this.props.song);
    
  }
  
  render() {

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
    <h1>{this.props.song.name} by {this.props.song.artist}</h1> 
    
    <SongDelete/>
    {renderLyrics}
  </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  const song = state.songs.find(song => song.id == ownProps.match.params.songId);
  console.log(song, "songshow")
  
    return {
      song,
      songs: state.songs,
      lyrics: state.lyrics,
      lyric: state.lyric 
    };
  }

export default connect(mapStateToProps, {currentSong})(SongsShow);

