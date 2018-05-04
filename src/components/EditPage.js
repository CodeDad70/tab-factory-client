import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { updateSong } from '../actions/songs';
import SongEdit from '../containers/SongEdit';



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
