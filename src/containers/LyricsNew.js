import React from 'react';
import { connect } from 'react-redux';


class LyricsNew extends React.Component { 

  render(){
    

    return ( 
    <div>
     
 
  <div className = "songtab">
    <h1>{this.props.song.name} by {this.props.song.artist}</h1>
    
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

export default connect(mapStateToProps)(LyricsNew);