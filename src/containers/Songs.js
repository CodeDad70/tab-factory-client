import React from 'react';
import {connect} from 'react-redux';
import Songnav from '../components/Songnav';
import {getSongs} from '../actions/songs';
import './App.css';

class Songs extends React.Component { 
  
  componentDidMount(){
    this.props.getSongs()
  }

  render() {
    return (
      <div>
        {this.props.songs.map (song => 
          <Songnav key={song.id} song={song}/>  
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    songs: state.songs
  })
}

export default connect(mapStateToProps,{getSongs})(Songs);

