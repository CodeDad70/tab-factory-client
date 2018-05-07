import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import {getSongs} from "../actions/songs"
import { Link } from 'react-router-dom';

class WelcomePage extends React.Component {
  
  
  render() {
    const logo = "gear-logo-icon-92970.png"
    const showAll = this.props.songs.map (song => 
     
     <div >
     
      <div className = "song-card">
         
      
              
      <div className="song-card-title">
        <h2>{song.name} by {song.artist}</h2> 
      </div>
      
      <div className="song-card-lyrics">
      <Link  className="link-style" key={song.id} to={`/songs/${song.id}`}><h5><i>See lyrics</i></h5> </Link>
        
      </div>
  
      
     
         </div>
         <br/><br/>
        
    </div>
    )
   
  
    return (
      
      
      <div className = "songtab">
          {showAll}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(WelcomePage);
