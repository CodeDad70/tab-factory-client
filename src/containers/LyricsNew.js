import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'




import {getSongs} from '../actions/songs';
import Lyricform from './Lyricform'
import '../stylesheets/App.css';

class LyricsNew extends React.Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }



 
  
  
  render() {
    let renderLyrics

    if(this.props.song.lyrics){    
      const renderLyrics = this.props.song.lyrics.map(lyric => 
        <h4 key={this.props.song.id} >{lyric.words}</h4>)
    } 
    
    
    return (
      <div>

      <div className = "songtab">
         <h1>{this.props.song.name} by {this.props.song.artist}</h1>
    
      </div>

        <div >
        {renderLyrics}
      </div>

      
      <div className="songtab">
       
        <h3> Create Lyrics: </h3>
        <Lyricform/>
      </div>
     
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
;