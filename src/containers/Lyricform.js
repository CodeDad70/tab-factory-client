import React from 'react';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';
import {updateLyricFormData} from '../actions/lyricForm';
import {createLyric} from '../actions/lyrics';
import LyricsNew from './LyricsNew';
import LyricsShow from './LyricsShow';
import {getSongs} from '../actions/songs';
import Navbar from './NavBar'



class Lyricform extends React.Component {
  constructor () {
    super();
    this.state = {
      fireRedirect: false,
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
    this.props.getSongs();
  
    this.setState({ fireRedirect: true });
    this.props.createLyric(this.props.lyricFormData);
  }


  render() {
    const { fireRedirect } = this.state
    const {words, song_id, chords} = this.props.lyricFormData;
    
    return (
      
      <div >
        
        <form onSubmit={this.handleOnSubmit} >

           
             Enter your chords here: <br/><br/>
             
            <input 
              
              type ="text-chords" 
              className = "lyricform" 
              onChange={this.handleOnChange}
              name="chords"
              value={chords}
              
            />
     
          
           
      

        <div>
         
          <h2>{words}</h2>
          </div><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <div>
      
          
            
              <input 
                type ="text" 
                className="LyricForm" 
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
    lyrics: state.lyrics 
  }
}

export default connect (mapStateToProps, {
  updateLyricFormData,
  createLyric,
  getSongs,
 
})(Lyricform);