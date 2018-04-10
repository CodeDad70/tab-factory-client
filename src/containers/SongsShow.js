import React from 'react';
import { connect } from 'react-redux';

const SongsShow = ({ song }) => 

  <div className = "songtab">
    <h2>{song.name} by {song.artist}</h2>
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
