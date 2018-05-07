import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getSongs} from "../actions/songs"
import SongCard from '../components/SongCard';

class WelcomePage extends React.Component {

  render() {

    const showAll = this.props.songs.map (song => 
     
    <div className = "songtab" >
      <SongCard song={song}/>
    </div>
    )
   
  
    return (
      
      
      <div >
          {showAll}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(WelcomePage);
