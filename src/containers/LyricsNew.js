import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import { getSongs } from '../actions/songs';
import Lyricform from './Lyricform'
import LyricsShow from './LyricsShow';
import '../stylesheets/App.css';

class LyricsNew extends React.Component {

  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    return (

      <div className="songtab">
        <h1>{this.props.song.name} by {this.props.song.artist}</h1>
        <Lyricform />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs,
    lyrics: state.lyrics
  };
}

export default connect(mapStateToProps, { getSongs })(LyricsNew);