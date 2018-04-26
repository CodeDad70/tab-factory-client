
import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateLyricFormData } from '../actions/lyricForm';
import { createLyric } from '../actions/lyrics';
import { getSongs } from '../actions/songs';



class Lyricform extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    const currentSongEditData = Object.assign({}, this.props.songEditData, {
      [name]: value, song_id: this.props.song.id
    })
    this.props.updateSongEditData(currentSongEditData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.getSongs();
    this.setState({ fireRedirect: true });
    this.props.editSong(this.props.songEditData);
  }


  render() {
    const { fireRedirect } = this.state
    const { name, artist, lyrics } = this.props.songEditData;

    return (

      <div >

        <form onSubmit={this.handleOnSubmit} >

         
        
        </form>

        {fireRedirect && (
          <Redirect to={'/lyrics/show'} />
        )}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songEditData: state.songEditData,
    song: state.song,
    songs: state.songs,
    lyrics: state.lyrics
  }
}

export default connect(mapStateToProps, {
  updateLyricFormData,
  createLyric,
  getSongs

})(Lyricform);