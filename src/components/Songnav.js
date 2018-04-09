import React from 'react';
import { Link } from 'react-router-dom';

const Songnav = ({ songs }) => {
  const renderSongs = songs.map(song => 
    <Link className = "Link" key={song.id} to={`/songs/${song.id}`}><h4>{song.name}</h4></Link>
  );
  
  return (
    <div >
      {renderSongs}
    </div>
  );
};

export default Songnav;