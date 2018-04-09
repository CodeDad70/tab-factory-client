import React from 'react';
import {connect} from 'react-redux';
import {updateSongFormData} from '../actions/songForm'
import {createSong} from '../actions/songs'
import '../stylesheets/App.css';

class Songform extends React.Component {

  handleOnChange = event => {
    const {name, value} = event.target
    const currentSongFormData = Object.assign({}, this.props.songFormData,{
      [name]:value
    })
    this.props.updateSongFormData(currentSongFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createSong(this.props.songFormData)
  }

  render() {
    const {name, artist} = this.props.songFormData;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>

          <div>
            <label htmlFor="name">Name: </label>
              <input 
                type ="text" 
                className = "songform" 
                onChange={this.handleOnChange}
                name="name"
                value={name}
              />
          </div>
          <br/>
          <div>
            <label htmlFor="name">Artist: </label>
              <input 
                type ="text" 
                className = "songform" 
                onChange={this.handleOnChange}
                name="artist"
                value={artist}
              />
          </div> 
          <br/>   
          <button type="submit"> Create Song </button> 
        </form>
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    songFormData: state.songFormData
  }
}

export default connect (mapStateToProps, {
  updateSongFormData,
  createSong 
})(Songform);