import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCounter } from '../actions/songs';
import { SongSorter } from '../components/SongSorter';

class WelcomePage extends React.Component {

  handleOnClick(song) {
    const counterUpdate = Object.assign({}, song, {
      counter: song.counter + 1
    })
    this.props.updateCounter(counterUpdate)
  }

  render() {

    const showAll = this.props.songs.sort(SongSorter('count', 'desc')).map(song =>
      <div className="songtab" >
        <div className="song-card">
          
          <div className="song-card-title">
            <h2><i>{song.name}</i> by {song.artist}</h2>
          </div>

          <div className="song-card-lyrics">
            <Link className="link-style" key={song.id} to={`/songs/${song.id}`}><h5><i>See lyrics</i></h5></Link>
            <br />

            <button onClick={() => this.handleOnClick(song)} className="btn btn-primary"> 
              Like This Song </button>
            <br /><br />

            <h4> This song has {song.counter} likes </h4>
          </div >
       
        </div>
          <br /><br />
      </div>
    )

    return (
      <div>
        {showAll}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { updateCounter, SongSorter })(WelcomePage);