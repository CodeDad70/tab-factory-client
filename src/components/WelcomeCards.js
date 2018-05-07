import React from 'react';
import { connect } from 'react-redux';
import DeleteSong from '../containers/DeleteSong';
import EditSong from '../containers/EditSong';
import { Link } from 'react-router-dom';


class WelcomeCards extends React.Component { 

  
  render() {
  return ( 
      
    
  
     
    <div className = "song-card">
       
    
            
    <div className="song-card-title">
      <h2><i>{this.props.song.name}</i> by {this.props.song.artist}</h2> 
    </div>
    
    <div className="song-card-lyrics">
      
      <Link  className="link-style" key={this.props.song.id} to={`/songs/${this.props.song.id}`}><h5><i>See lyrics</i></h5> </Link>
    </div >

    

   
       </div>
      
  
  )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs
  };
}



export default WelcomeCards;

