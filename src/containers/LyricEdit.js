import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { createLyric } from '../actions/lyrics';
import { updateSong } from '../actions/songs';
import {updateLyricEditData} from '../actions/lyricEdit';
import {updateLyric} from '../actions/lyrics'



class LyricEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnChange = event => {
    const { name, value, id} = event.target
    
    const currentLyricEditData = Object.assign({}, this.props.lyricEditData, {
      [name]: value, id:id
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
    const { words, chords } = this.props.song.lyrics;

    
    const renderLyrics = this.props.song.lyrics.map(lyric => 

      
      <div>
        
        <label htmlFor="chords"><h2>Chords: </h2></label>
            
            <input
               type="text"
               onChange={this.handleOnChange}
               
               name="chords"
               id={lyric.id}
               defaultValue={lyric.chords}
             />

        <label htmlFor="words"><h2>Lyric: </h2></label>
        
          <input
            type="text"
            onChange={this.handleOnChange}
            
            name="words"
            id={lyric.id}
            defaultValue={lyric.words}
          />


          </div>
  
      );
    return (
      
      <div className= "songtab" >
       
        <form onSubmit={this.handleOnSubmit} >

        {renderLyrics}   

        

          <button type="submit"> Update Lyrics </button>
        
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
  updateLyric,
  createLyric,

})(LyricEdit);