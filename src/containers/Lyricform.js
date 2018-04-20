import React from 'react';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';
import {updateLyricFormData} from '../actions/lyricForm';
import {createLyric} from '../actions/lyrics';
import {currentSong} from '../actions/song';
import LyricsNew from './LyricsNew';



class Lyricform extends React.Component {
  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    const currentLyricFormData = Object.assign({}, this.props.lyricFormData,{
      [name]:value
    })
    this.props.updateLyricFormData(currentLyricFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault(); 
    this.setState({ fireRedirect: true })
    this.props.createLyric(this.props.lyricFormData)
    
    }

 

  render() {
    const { fireRedirect } = this.state
    const {words, chords, song_id} = this.props.lyricFormData;
    
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>

          <div>
            <label htmlFor="name">Name: </label>
              <input 
                type ="text" 
                className = "lyricform" 
                onChange={this.handleOnChange}
                name="words"
                value={words}
              />
          </div>
          
          <br/>

        


          <button type="submit"> Create Lyric </button> 
        </form>
        {fireRedirect && (
          <Redirect to={'/lyrics'}/>
        )}
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    lyricFormData: state.lyricFormData,
    currentSong: state.currentSong
  }
}

export default connect (mapStateToProps, {
  updateLyricFormData,
  createLyric,
  currentSong 
})(Lyricform);