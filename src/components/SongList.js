import React from 'react';
import { Link } from 'react-router-dom';

const SongList = ({ songs }) => {

  function compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || 
         !b.hasOwnProperty(key)) {
        return 0; 
      }
      
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
        
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  }
  
  const renderSongs = songs.sort(compareValues('name', 'asc')).map(song =>
    <Link className="link-style" key={song.id} to={`/songs/${song.id}`}><h5><i>{song.name}</i> by {song.artist} </h5></Link>
  );

  return (
    <div >
      {renderSongs}
    </div>
  );
};

export default SongList;