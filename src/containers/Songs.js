import React from 'react';
import Songnav from '../components/Songnav'

const Songs=(props) => (
  
  <div>
    {props.songs.map (song => 
    <div key={song.id} className="App-header"  >
      <Songnav song={song}/>
    </div>
    )};
  </div>
);


export default Songs;

