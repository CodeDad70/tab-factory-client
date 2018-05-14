import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { updateSongFormData } from '../actions/songForm'
import { createSong } from '../actions/songs'

class Songform extends React.Component {
  handleOnChange = event => {
    const { name, value } = event.target
    const currentSongFormData = Object.assign({}, this.props.songFormData, {
      [name]: value,
    })
    this.props.updateSongFormData(currentSongFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createSong(this.props.songFormData, this.props.history)
  }

  render() {
    
    const { name, artist, lyrics } = this.props.songFormData

    return (
      <div className="main-stage">
        <div className="form-layout">
          <h1> Create a new tab: </h1>

          <form onSubmit={this.handleOnSubmit}>
            
            <div className="form-inline">
              <label htmlFor="name">
                <h4>Name: </h4>
              </label>
              <input type="text" onChange={this.handleOnChange} name="name" value={name} />

              <label htmlFor="artist">
                <h4> Artist: </h4>
              </label>
              <input type="text" onChange={this.handleOnChange} name="artist" value={artist} />
            </div>

            <br />
            <br />

            <div>
              <label htmlFor="lyrics">
                <h4>Lyrics: </h4>
              </label>
              <textarea
                className="form-control"
                rows="20"
                width="70%"
                type="textarea"
                onChange={this.handleOnChange}
                name="lyrics"
                value={lyrics}
              />
            </div>

            <br />
            <br />

            <button type="submit" className="btn btn-success">
              Create Song
            </button>
            
          </form>
        </div>
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
})(Songform)