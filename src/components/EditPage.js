import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { createLyric } from '../actions/lyrics';
import { updateSong } from '../actions/songs';
import SongEdit from '../containers/SongEdit';
import LyricEdit from '../containers/LyricEdit';



class EditPage extends React.Component {
  
  
  render() {
  
    return (
      <div>
        <SongEdit/>
          
      </div>
    )
  }
}

export default EditPage;
