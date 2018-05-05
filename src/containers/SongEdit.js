import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';

import { updateSong } from '../actions/songs';



class SongEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnChange = event => {
    const { name, value, defaultValue } = event.target
    
    const currentSongEditData = Object.assign({}, this.props.songEditData, {
      [name]: value, id: this.props.song.id
    })
    this.props.updateSongEditData(currentSongEditData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true });
    this.props.updateSong(this.props.songEditData);
  }


  render() {
    const { fireRedirect } = this.state
    const { name, artist, lyrics } = this.props.song;

    return (

      <div className= "main-stage" >
      <div className = "form-layout">

        <form onSubmit={this.handleOnSubmit} >

          <div className="form-inline">
            <label htmlFor="name"><h2>Name: </h2></label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="name"
                
                defaultValue={this.props.song.name}
              />
          
            <label htmlFor="artist"><h2>Artist: </h2></label>
             <input
                type="text"
                onChange={this.handleOnChange}
                name="artist"
                defaultValue={artist}
              />
          </div>

          <div >
            <label htmlFor="lyrics"><h4>Lyrics: </h4></label>
             <textarea
                className = "form-control" rows="10" width="70%"
                type="textarea"
                onChange={this.handleOnChange}
                name="lyrics"
                
                defaultValue={lyrics}
              />
          </div>
          
          <button type="submit"> Save Song </button>
        
        </form>

        {fireRedirect && (
          <Redirect to={'/'} />
        )}

      </div>
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
  updateSongEditData,
  updateSong,

})(SongEdit);