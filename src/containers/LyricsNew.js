import React from 'react';
import { connect } from 'react-redux';

class LyricsNew extends React.Component { 
  
  render() {
    
    console.log(this.props)

    return ( 
      
 
  <div className = "songtab">
    {/* <h2>{this.props.song.song.name} by {this.props.song.song.artist}</h2>  */}
   
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  song: state.current_song 
}

export default connect(mapStateToProps)(LyricsNew);