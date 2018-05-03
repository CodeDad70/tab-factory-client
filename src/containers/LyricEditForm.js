import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongEditData } from '../actions/songEdit';
import { createLyric } from '../actions/lyrics';
import { updateSong } from '../actions/songs';
import {updateLyricEditData} from '../actions/lyricEdit';
import {updateLyric} from '../actions/lyrics';
import {currentLyric} from '../actions/lyric';
import {currentSong} from '../actions/song';


class LyricEditForm extends React.Component {
  render() {
    return (<div>I'm the child</div>);
  }
}

export default LyricEditForm