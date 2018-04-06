  import React from 'react';

  const songNav = ({song}) => (

    <div>
      <h1> Select a Song : </h1>
      
      <div key={song.id} className="App-header"  >
        <h3> {song.name} </h3>
        <p> By: {song.artist} </p>
      </div>
      
    </div>

  )