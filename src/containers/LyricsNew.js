import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import Lyricform from './Lyricform';


import {getSongs} from '../actions/songs';

import '../stylesheets/App.css';

class LyricsNew extends React.Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }

  
  
  render() {
    
    return (
      <div>

      <div className = "songtab">
         <h1>{this.props.song.name} by {this.props.song.artist}</h1>
    
      </div>
       
      <div className="songtab">
       
        <h3> Create a Lyrics: </h3>
        <Lyricform/>
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

export default connect(mapStateToProps, { getSongs })(LyricsNew);
;