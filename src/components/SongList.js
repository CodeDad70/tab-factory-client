import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SongSorter } from '../components/SongSorter';

class SongList extends React.Component {

  render() {

    const renderSongs = this.props.songs.sort(SongSorter('name', 'asc')).map(song =>
      <Link className="link-style" key={song.id} to={`/songs/${song.id}`}><h5><i>{song.name}</i> by {song.artist} </h5></Link>
    );

    return (
      <div>
        {renderSongs}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { SongSorter })(SongList);