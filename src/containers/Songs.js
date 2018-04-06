import React from 'react';
import Songnav from '../components/Songnav';
import './App.css';

class Songs extends React.Component { 
  render() {
    return (
      <div>
        {this.props.songs.map (song => 
          <Songnav key={song.id} song={song}/>  
        )}
      </div>
    );
  }
}

export default Songs;

