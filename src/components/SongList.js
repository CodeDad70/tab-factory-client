import React from 'react';
import { Link } from 'react-router-dom';


const SongList = ({ songs }) => {

  const renderSongs = songs.map(song => 
    <Link  className="link-style" key={song.id} to={`/songs/${song.id}`}><h5><i>{song.name}</i> by {song.artist} </h5></Link>
  );
  
  return (
    <div >
      {renderSongs}
    </div>  
   );
};

export default SongList;