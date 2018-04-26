import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import {currentSong} from '../actions/song';

class EditButton extends React.Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false,
   }
  }


 
  handleOnClick = () => {
   
    this.props.currentSong(this.props.song);
    this.setState({ fireRedirect: true })
  }
  


  render() {
    const { fireRedirect } = this.state


    return (
      <div>


        <button onClick={this.handleOnClick}> Edit Song </button>
        
        {fireRedirect && (
          
          <Redirect to={'/song/edit'} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    song: state.song
  }
}

export default connect(mapStateToProps, {currentSong})(EditButton);