import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import {deleteSong} from '../actions/songs';
import { getSongs } from '../actions/songs';
import {emptySong} from '../actions/song';
import {deleteSongUpdate} from '../actions/songs';
import DeleteButton from '../components/DeleteButton'

class DeleteSong extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnClick = () => { 
    this.setState({ fireRedirect: true })
    this.props.deleteSongUpdate(this.props.song)
    this.props.deleteSong(this.props.song);
    this.props.emptySong(this.props.song);
    
  }
  


  render() {
    const { fireRedirect } = this.state
    
    return (
      <div onClick={this.handleOnClick} >
        <DeleteButton/> 
        {fireRedirect && (
          <Redirect to={'/'}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songFormData: state.songFormData,
    songs: state.songs,
    song: state.song
  }
}

export default connect(mapStateToProps,{
  deleteSong,
  getSongs,
  emptySong,
  deleteSongUpdate, 
})(DeleteSong);