import React from 'react';
import DeleteSong from '../containers/DeleteSong';
import EditSong from '../containers/EditSong';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class SongCard extends React.Component {

  render() {
    const song = this.props.song
    debugger
    return (
      <div className="song-card">
        
        <div className="song-card-title">
          <h2><i>{this.props.song.name}</i> by {this.props.song.artist}</h2>
        </div>

        <div className="song-card-lyrics">
       
          <h4>{this.props.song.lyrics}</h4>
        </div >
      
        <div>
          <EditSong song={song}/>
          <DeleteSong song={song}/>
          
        </div>

     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(SongCard);