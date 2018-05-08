import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeCards extends React.Component {
  
  render() {
    
    return (
      <div className="song-card">
        
        <div className="song-card-title">
          <h2><i>{this.props.song.name}</i> by {this.props.song.artist}</h2>
        </div>

        <div className="song-card-lyrics">
          <Link className="link-style" key={this.props.song.id} to={`/songs/${this.props.song.id}`}><h5><i>See lyrics</i></h5></Link>
        </div >

      </div>
    )
  }
};

export default WelcomeCards;

