import React from 'react';

const Songs=(props) => (
  
  <div>
    {props.songs.map (song => 
      <Songnav song={song}/>
    )};
  </div>
);


export default Songs;

