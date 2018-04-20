import React from 'react';
import { connect } from 'react-redux';

class SongsShow extends React.Component { 
  
  render() {
    
  const renderLyrics = this.props.song.lyrics.map(song =><h4 key={song.id}>{song.words}</h4>);
    
  return ( 
      
 
  <div className = "songtab">
    <h2>{this.props.song.name} by {this.props.song.artist}</h2> 
    {renderLyrics}
  </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  const song = state.songs.find(song => song.id == ownProps.match.params.songId)

  if (song){
    return {song}
  } else {
    return {song: {} }
  }
}

export default connect(mapStateToProps)(SongsShow);