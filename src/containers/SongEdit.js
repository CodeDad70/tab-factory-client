
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
    const { words, chords } = this.props.songEditData;

    return (

      <div >

        <form onSubmit={this.handleOnSubmit} >

          Enter your chords here: <br /><br />

           <div>
            <label htmlFor="name"><h2>Name: </h2></label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="name"
                value={name}
                defaultValue= {this.props.song.name}
              />
          </div>
          
          <br/><br/>

          <div>
            <label htmlFor="artist"><h2>Artist: </h2></label>
             <input
                type="text"
                onChange={this.handleOnChange}
                name="artist"
                value={artist}
                defaultValue= {this.props.song.artist}
              />
          </div>
          
          <br/><br/>


          <input
            type="text-chords"
            className="lyricform"
            onChange={this.handleOnChange}
            name="chords"
            value={chords}
            defaultValue= {this.props.song.name}
          />

          <div className="lyric-render">
            <h2>{words}</h2>
          </div>

          <div>
            <input
              type="text"
              className="LyricForm"
              onChange={this.handleOnChange}
              name="words"
              value={words}
            />
          </div>

          <br/>

          <button type="submit"> Create Lyric </button>
        
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
    lyricFormData: state.lyricFormData,
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