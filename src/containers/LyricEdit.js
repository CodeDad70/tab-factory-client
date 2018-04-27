import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { createLyric } from '../actions/lyrics';
import { updateSong } from '../actions/songs';



class LyricEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnChange = event => {
    const { name, value} = event.target
    
    const currentLyricEditData = Object.assign({}, this.props.lyricEditData, {
      [name]: value, id: this.props.lyric.id
    })
    this.props.updateLyricEditData(currentLyricEditData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true });
    this.props.updateLyric(this.props.lyricEditData);
  }


  render() {
    const { fireRedirect } = this.state
    const { words, chords } = this.props.lyric;

    return (

      <div className= "songtab" >

        <form onSubmit={this.handleOnSubmit} >

          <div>
            <label htmlFor="lyric"><h2>Lyric: </h2></label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="words"
                defaultValue={words}
              />
          </div>
          
          <br/><br/>

          <div>
            <label htmlFor="chords"><h2>Chords: </h2></label>
             <input
                type="text"
                onChange={this.handleOnChange}
                name="chords"
                defaultValue={chords}
              />
          </div>
          
          <button type="submit"> Save Song </button>
        
        </form>

        {fireRedirect && (
          <Redirect to={'/'} />
        )}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lyricEditData: state.lyricEditData,
    song: state.song,
    songs: state.songs,
    lyrics: state.lyrics
  }
}

export default connect(mapStateToProps, {
  updateLyricEditData,
  updateSong,
  createLyric,

})(LyricEdit);