import React from 'react'
import { connect } from 'react-redux'
import { currentSong } from '../actions/song'
import SongCard from '../components/SongCard'

class SongsShow extends React.Component {
  render() {
    return (
      <div className="songtab">
        <SongCard song={this.props.song} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const song = state.songs.find(song => {
    return song.id == ownProps.match.params.songId
  })

  return {
    song,
  }
}

export default connect(mapStateToProps)(SongsShow)