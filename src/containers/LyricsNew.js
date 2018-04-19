import React from 'react';
import { connect } from 'react-redux';


class LyricsNew extends React.Component { 
  
  render() {
    
    
    return ( 
      
 
  <div className = "songtab">
    <h2>{this.props.song.name} by {this.props.song.artist}</h2> 
    
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

export default connect(mapStateToProps)(LyricsNew);