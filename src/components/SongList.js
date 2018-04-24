import React from 'react';
import { Link } from 'react-router-dom';


const SongList = ({ songs }) => {

  const renderSongs = songs.map(song => 
    <Link  className="link-style" key={song.id} to={`/songs/${song.id}`}><h3>{song.name}</h3></Link>
  );
  
  return (
    <div >
      {renderSongs}
    </div>  
   );
};

export default SongList;