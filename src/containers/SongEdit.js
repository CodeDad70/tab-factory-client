import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { updateSong } from '../actions/songs';
import { Form, Text, NestedField } from 'react-form';




class SongEdit extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fireRedirect: false,
    } 
  }

  
  render() {
    const { fireRedirect } = this.state
    const { name, artist, lyrics,  words, chords, song_id, id } = this.props.song;
    
    
      

    return (
      
      <div className= "songtab" >

       <Form onSubmit={submittedValues => console.log(submittedValues) }>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form4">
              <label htmlFor="name">Name</label>
              <Text defaultValue = {name}field="name" id="name" />
              <label htmlFor="artist">Artist</label>
              <Text defaultValue = {artist} field="artist" id="artist" />
              <br/><br/>
              
              
                
              <Text defaultValue = {lyrics} field="lyrics" id="lyrics" />
               


             

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
   
  }
}

export default connect(mapStateToProps, {
  updateSongEditData,
  updateSong,

})(SongEdit)
