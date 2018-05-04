import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { updateSongFormData } from '../actions/songForm';
import { createSong } from '../actions/songs';

import { getSongs } from '../actions/songs';

class Songform extends React.Component {

  componentDidMount() {
   getSongs();
  }

  constructor() {
    super();
    this.state = {
      fireRedirect: false,
   }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    const currentSongFormData = Object.assign({}, this.props.songFormData, {
      [name]: value
    })
    this.props.updateSongFormData(currentSongFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true })
    this.props.getSongs();
    this.props.createSong(this.props.songFormData)
  }

  render() {
    const { fireRedirect } = this.state
    const { name, artist, lyrics } = this.props.songFormData;

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>

          <div>
            <label htmlFor="name"><h2>Name: </h2></label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="name"
                value={name}
              />
          </div>
          
          <br/><br/>

          <div>
            <label htmlFor="artist"><h2>Artist: </h2></label>
             <input
                type="text"
                onChange={this.handleOnChange}
                name="artist"
                value={artist}
              />
          </div>

          <div>
            <label htmlFor="lyrics"><h2>Lyrics: </h2></label>
             <input
                type="text_field"
                onChange={this.handleOnChange}
                name="lyrics"
                value={lyrics}
              />
          </div>
          
          <br/><br/>

          <button type="submit"> Create Song </button>
        
        </form>
        
        {fireRedirect && (
          <Redirect to={'/lyrics'} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songFormData: state.songFormData,
    
  }
}

export default connect(mapStateToProps, {
  updateSongFormData,
  createSong,
  getSongs,
})(Songform);