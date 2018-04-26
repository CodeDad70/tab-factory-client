import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/App.css';

class RenderLyrics extends React.Component {

  render() {
 
    const showAll = this.props.lyric.map(lyric =>

      <div>
        <div className="chordfont" key={lyric.song_id}>{lyric.chords}</div>
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