import React from 'react';
import { connect } from 'react-redux';

class SongsShow extends React.Component { 
  
  render() {
    
  const renderLyrics = this.props.song.lyrics.map(lyric =>
  
    <div> 
    <h3 classname="songtab" key={lyric.id}>{lyric.chords}</h3> 
    <h2 className = "songtab" key={lyric.id}>{lyric.words}</h2>
    </div>

);
    
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