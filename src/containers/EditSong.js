import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { currentSong } from '../actions/song';
import EditButton from '../components/EditButton';

class EditSong extends React.Component {
  
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
      <div onClick={this.handleOnClick}>
        <EditButton/>
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

export default connect(mapStateToProps, {currentSong})(EditSong);