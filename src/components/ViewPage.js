import React from 'react';
import { connect } from 'react-redux';
import SongDelete from '../containers/SongDelete';
import {currentSong} from '../actions/song';
import EditButton from './EditButton'
import SongCard from './SongCard';

class ViewPage extends React.Component { 

  
  
  render() {

    this.props.currentSong(this.props.song);

  return ( 
      
    
    <SongCard song={this.props.song}/>
  )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs
  };
}



export default connect(mapStateToProps, {currentSong})(ViewPage);
