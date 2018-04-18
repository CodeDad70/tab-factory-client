import React from 'react';
import { Link } from 'react-router-dom';


const SongList = ({ songs }) => {

  const renderSongs = songs.map(song => 
    <Link  className="link-style" key={song.id} to={`/songs/${song.id}`}><h4>{song.name}</h4></Link>
  );
  
  return (
    <div >
      {renderSongs}
    </div>  
   );
};

export default SongList;