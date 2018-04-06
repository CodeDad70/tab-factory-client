import React from 'react';

const Songs=(props) => (
  
  <div>
    {props.songs.map (song => 
      <songNav song={song}/>
    )};
  </div>
);


export default Songs;

