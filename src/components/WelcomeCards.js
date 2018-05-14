import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LikeButton from './LikeButton';
import { updateCounter } from '../actions/songs';

class WelcomeCards extends React.Component {


  handleOnClick = (song) => {
    console.log(this.props.song.counter, "inside onClick")
    let counterIncrease = this.props.song.counter + 1
    console.log(counterIncrease)
    const currentSongEditData = Object.assign({}, this.props.song, {
      counterIncrease, id: this.props.song.id
    })
    this.props.updateCounter(currentSongEditData);
  }

  render() {
    return (
      <div className="song-card">

        <div className="song-card-title">
          <h2><i>{this.props.song.name}</i> by {this.props.song.artist}</h2>
        </div>

        <div className="song-card-lyrics">
          <Link className="link-style" key={this.props.song.id} to={`/songs/${this.props.song.id}`}><h5><i>See lyrics</i></h5></Link>
          <br />
          <button onClick={this.handleOnClick} className="btn btn-primary"> Like This Song </button>
          <br /><br />

          <h4> This song has {this.props.song.counter} likes </h4>
        </div >

      </div>
    )
  }
};

const mapStateToProps = song => {
  return {
    song: this.state.song
  }
}

export default connect(mapStateToProps, { updateCounter, })(WelcomeCards);

