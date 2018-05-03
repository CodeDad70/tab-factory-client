import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { createLyric } from '../actions/lyrics';
import { updateSong } from '../actions/songs';
import { Form, Text, NestedField } from 'react-form';




class SongEdit extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fireRedirect: false,
       song: {
        id: this.props.song.id,
        name: '',
        artist: '',
        lyrics: [
          {
          id: '',    
          words: '',
          chords: '',
          song_id: ''  
          }
        ]
      }
    }

  }

  
  render() {
    const { fireRedirect } = this.state
    const { name, artist, lyrics,  words, chords, song_id, id } = this.props.song;
    const fieldCount = this.props.song.lyrics.length
    let count
    const QuestionFields = () => (

      this.props.song.lyrics.map ((lyric, index) =>
      
      <div>
        <Text defaultValue = {lyric.id} field="id" type="hidden" />
        <Text defaultValue = {lyric.song_id} field="song_id" type="hidden" />
        <label htmlFor="chords">Chords</label>
        <Text defaultValue = {lyric.chords} field="chords" key={index} /> <br/>
        <label htmlFor="words">Lyric</label>
        <Text defaultValue = {lyric.words} field="words"  /><br/><br/><br/>
      </div>
       
       )
        
      )

      

    return (
      
      <div className= "songtab" >

       <Form onSubmit={submittedValues => console.log(submittedValues, count) }>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form4">
              <label htmlFor="name">Name</label>
              <Text defaultValue = {name}field="name" id="name" />
              <label htmlFor="artist">Artist</label>
              <Text defaultValue = {artist} field="artist" id="artist" />
              <br/><br/>
              
              
                <NestedField field={['test', 0]} component={QuestionFields} />
             

              <button type="submit" >
                Submit
              </button>
            </form>
          )}
        </Form>

        {fireRedirect && (
          <Redirect to={'/'} />
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
  updateSong,
  createLyric,

})(SongEdit);
