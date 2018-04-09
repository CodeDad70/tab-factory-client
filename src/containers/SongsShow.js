import React from 'react';
import { connect } from 'react-redux';

const SongsShow = ({ song }) => 
  <div >
    <h2>{song.name}</h2>
    <p>{song.artist}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const song = state.songs.find(song => song.id == ownProps.match.params.songId)

  if (song){
    return {song}
  } else {
    return {song: {} }
  }
}

export default connect(mapStateToProps)(SongsShow);
