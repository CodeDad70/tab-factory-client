
import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { createLyric } from '../actions/lyrics';
import { getSongs } from '../actions/songs';



class SongEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    const currentSongEditData = Object.assign({}, this.props.songEditData, {
      [name]: value
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
    const { name, artist, lyrics } = this.props.song;

    return (

      <div className= "songtab" >

        <form onSubmit={this.handleOnSubmit} >

          <div>
            <label htmlFor="name"><h2>Name: </h2></label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="name"
                
                defaultValue={this.props.song.name}
              />
          </div>
          
          <br/><br/>

          <div>
            <label htmlFor="artist"><h2>Artist: </h2></label>
             <input
                type="text"
                onChange={this.handleOnChange}
                name="artist"
                defaultValue={artist}
              />
          </div>
          
        
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
  updateSongEditData,
  createLyric,
  getSongs

})(SongEdit);