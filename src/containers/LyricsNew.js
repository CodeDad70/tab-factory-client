import React from 'react';
import { connect } from 'react-redux';

class LyricsNew extends React.Component { 
  
  render(){
    
    const currentSong = this.props.song.map(song =><h4 key={song.id}>{song.name} by {song.artist} </h4>);

    return ( 
      
 
  <div className = "songtab">
    "Here "
    {currentSong}
    {currentSong.key}
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song
  };
}

export default connect(mapStateToProps)(LyricsNew);