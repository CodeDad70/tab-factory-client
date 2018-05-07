import React from 'react';
import { connect } from 'react-redux';
import DeleteSong from './DeleteSong';
import {currentSong} from '../actions/song';
import EditButton from '../components/EditButton';
import SongCard from '../components/SongCard';


class SongsShow extends React.Component { 

  
  
  render() {
    this.props.currentSong(this.props.song);
    

  return ( 
      
    <div className = 'songtab'>
      <SongCard song={this.props.song}/>
    </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  const song = state.songs.find(song => song.id == ownProps.match.params.songId);
    return {
      song,
      songs: state.songs, 
    };
  }

export default connect(mapStateToProps, {currentSong})(SongsShow);