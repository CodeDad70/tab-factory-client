import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { deleteSong } from '../actions/songs'
import DeleteButton from '../components/DeleteButton'
import {deleteSongUpdate} from '../actions/songs'

class DeleteSong extends React.Component {
  handleOnClick = () => {
    this.props.deleteSong(this.props.song.id, this.props.history)   
  }

  render() {
    return (
      <div onClick={this.handleOnClick}>
        <DeleteButton />
      </div>
    )
  }
}

export default connect(null, {
  deleteSong,
  deleteSongUpdate,
})(DeleteSong)