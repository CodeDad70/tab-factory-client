import React from 'react';
import { connect } from 'react-redux';


import Lyricform from '../containers/Lyricform'
import '../stylesheets/App.css';

class RenderLyrics extends React.Component {
  
 
  render() {
    
    const showAll = this.props.lyric.map(song=><h2 className = "songtab" key={song.id}>{song.words}</h2>)
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