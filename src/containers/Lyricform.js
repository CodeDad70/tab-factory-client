import React from 'react';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';
import {updateLyricFormData} from '../actions/lyricForm';
import {createLyric} from '../actions/lyrics';
import LyricsNew from './LyricsNew';
import LyricsShow from './LyricsShow';
import Navbar from './NavBar'



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
      [name]:value, song_id: this.props.song.id
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
    const {words, song_id} = this.props.lyricFormData;
    
    return (
      <div>
        <div>
          <h2>{words}</h2>
          </div>
        <form onSubmit={this.handleOnSubmit}>

          <div>
            
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
          <Redirect to={'/lyrics/show'}/>
        )}

        

      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    lyricFormData: state.lyricFormData,
    song: state.song,
    songs: state.songs,
    lyrics: state.lyrics, 
  }
}

export default connect (mapStateToProps, {
  updateLyricFormData,
  createLyric
})(Lyricform);