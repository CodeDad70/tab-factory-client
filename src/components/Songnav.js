  import React from 'react';
  import { Link } from 'react-router-dom';

  const Songnav = ({song}) => (   
    <Link key={song.id} to={`/songs/${song.id}`}>
      <h4> <i>{song.name}</i> by {song.artist} </h4>
    </Link>  
  )

  export default Songnav;

