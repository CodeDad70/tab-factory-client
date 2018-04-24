import React from 'react';
import { connect } from 'react-redux';
import ChordsForm from '../containers/ChordsForm';


import Lyricform from '../containers/Lyricform'
import '../stylesheets/App.css';

class RenderLyrics extends React.Component {
  
 
  render() {
    

    const showAll = this.props.lyric.map(lyric=>
      <div>     
        <h3  key={lyric.id}>{lyric.chords}</h3> 
        <h2 key={lyric.id}>{lyric.words}</h2>
      </div>
    )

    return (
    
      <div>
        {showAll}
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs,
    lyrics: state.lyrics,
    lyric: state.lyric 
  };
}

export default connect(mapStateToProps)(RenderLyrics);
;