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
    console.log(this.props.lyric)

    
    return (
    
      <div className = "songtab">
         <h1>{this.props.song.name} by {this.props.song.artist}</h1>
    
     

     
         {this.props.lyric.words} 

       
        <h3> Create Lyrics: </h3>
        <Lyricform/>
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

export default connect(mapStateToProps, { getSongs })(LyricsShow);
;