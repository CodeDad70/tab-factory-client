import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import {getSongs} from '../actions/songs';
import Lyricform from './Lyricform'
import '../stylesheets/App.css';

class LyricsShow extends React.Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }

  render() {
    console.log(this.props.song)
    

    
    
    return (
      <div>

      <div className = 'songtab'> "Test" </div>
      {this.props.song.lyrics}

              
   
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

export default connect(mapStateToProps, { getSongs })(LyricsShow);
;