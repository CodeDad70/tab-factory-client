import React from 'react';
import { connect } from 'react-redux';

class SongsShow extends React.Component { 
  
  render() {
    
  const renderLyrics = this.props.song.lyrics.map(lyric =>
    
    <div>
    <td> 
     
      <tr>
      <div className="chordfont">{lyric.chords}</div>
      <h2 key={lyric.id}>{lyric.words}</h2>
      </tr>
    
    </td>
    
    </div>

);
    
  return ( 
      
 
  <div className = "songtab">
    <h1>{this.props.song.name} by {this.props.song.artist}</h1> 
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