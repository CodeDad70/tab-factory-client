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
    this.props.createSong(this.props.songFormData)
    this.props.getSongs();
  }

  render() {
    const { fireRedirect } = this.state
    const { name, artist, lyrics } = this.props.songFormData;

    return (
     
      <div className = "form-layout">
        <form onSubmit={this.handleOnSubmit}>

        <div className="form-inline">
            <label htmlFor="name"><h4>Name: </h4></label>
              <input
              
                type="text"
                onChange={this.handleOnChange}
                name="name"
                value={name}
              />
        
          


          
            <label htmlFor="artist"><h4>  Artist: </h4></label>
             <input
                type="text"
                onChange={this.handleOnChange}
                name="artist"
                value={artist}
              />
         
          </div>

          <div >
            <label htmlFor="lyrics"><h4>Lyrics: </h4></label>
             <textarea
                className = "form-control" rows="10" width="70%"
                type="textarea"
                onChange={this.handleOnChange}
                name="lyrics"
                value={lyrics}
              />
          </div>

          
          <br/><br/>

          <button type="submit"> Create Song </button>
        
        </form>
        
        {fireRedirect && (
          <Redirect to={'/song/view'} />
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