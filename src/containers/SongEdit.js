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
    

      

    return (
      
      <div className= "songtab" >

       <Form onSubmit={submittedValues => console.log(submittedValues, count) }>
          { formApi => (
           
             
                <form onSubmit={formApi.submitForm} id="dynamic-form">
                  <label htmlFor="name">Name</label>
                  <Text field="name" id="name" />
                  <label htmlFor="artist">Name</label>
                  <Text field="artist" id="artist" />

                  { this.props.song.lyrics.map( ( lyric, i ) => (
                    <div key={`lyric${i}`}>
                      <label htmlFor={`lyric-words-${i}`}>Lyric</label>
                      <Text defaultValue={lyric.words} field={['lyric', i]} id={`lyric.words-${i}`} />
                     
                    </div>
                  ))}
                  
             









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
