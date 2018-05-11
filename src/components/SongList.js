import React from 'react';
import { Link } from 'react-router-dom';
import {SongSorter} from './SongSorter';
import { connect } from 'react-redux';

const SongList = ({ songs }) => {


  const renderSongs = songs.sort(SongSorter('name', 'asc')).map(song =>
    <Link className="link-style" key={song.id} to={`/songs/${song.id}`}><h5><i>{song.name}</i> by {song.artist} </h5></Link>
  );

  return (
    <div >
      {renderSongs}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {   
    songs: state.songs
  };
};

export default connect(mapStateToProps, { SongSorter })(SongList);