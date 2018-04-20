import React from 'react';
import { connect } from 'react-redux';
import {getSongs} from '../actions/songs';
import SongList from '../components/SongList';

class LyricsNew extends React.Component { 

  componentDidMount() {
   <SongList/>
  }
  
  render(){
    
    

    return ( 
      
 
  <div className = "songtab">
    <h1>{this.props.song.name} by {this.props.song.artist}</h1>
    
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

export default connect(mapStateToProps)(LyricsNew);