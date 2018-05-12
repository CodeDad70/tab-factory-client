import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { deleteSong } from '../actions/songs';
import { getSongs } from '../actions/songs';
import { emptySong } from '../actions/song';
import { deleteSongUpdate } from '../actions/songs';
import DeleteButton from '../components/DeleteButton'
import { refreshSongList } from '../actions/songs';

class DeleteSong extends React.Component {

  handleOnClick = () => {
    this.props.deleteSong(this.props.song, this.props.history);
    this.props.deleteSongUpdate(this.props.song);
  }

  render(song) {

    return (

      <div className="song-card-delete">
        <button onClick={this.handleOnClick} className="btn btn-danger"> Delete Song </button>

      </div>
    )
  }
}

const mapStateToProps = (song) => {
  song: song
}

export default connect(mapStateToProps, {
  deleteSong,
  getSongs,
  emptySong,
  deleteSongUpdate,
  refreshSongList,
})(DeleteSong);