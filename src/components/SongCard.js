import React from 'react';
import DeleteSong from '../containers/DeleteSong';
import EditSong from '../containers/EditSong';

class SongCard extends React.Component {

  render() {
    return (
      <div className="song-card">
        
        <div className="song-card-title">
          <h2><i>{this.props.song.name}</i> by {this.props.song.artist}</h2>
        </div>

        <div className="song-card-lyrics">
          <h4>{this.props.song.lyrics}</h4>
        </div >
      
        <div>
          <EditSong/>
          <DeleteSong/>
        </div>

     </div>
    )
  }
}

export default SongCard;

