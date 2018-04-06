import React from 'react';
import Songnav from '../components/Songnav'
import './App.css'

const Songs=(props) => ( 
  <div>
    {props.songs.map (song => 
      <Songnav key={song.id} song={song}/>  
    )}
  </div>
);


export default Songs;

