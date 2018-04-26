import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import {deleteSong} from '../actions/songs';
import { getSongs } from '../actions/songs';
import NavBar from './NavBar';

import LyricsNew from './LyricsNew';

class SongDelete extends React.Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false,
   }
  }


 
  handleOnClick = () => {
    this.props.getSongs();
    this.props.deleteSong(this.props.song);
    this.setState({ fireRedirect: true })
  }
  
  componentDidMount() {
    this.props.getSongs();
    
  }

  render() {
    const { fireRedirect } = this.state


    return (
      <div>


        <button onClick={this.handleOnClick}> Delete Song </button>
        
        {fireRedirect && (
          
          <Redirect to={'/'} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songFormData: state.songFormData,
    songs: state.songs,
    song: state.song
  }
}

export default connect(mapStateToProps, {
  deleteSong,
  getSongs
  
})(SongDelete);