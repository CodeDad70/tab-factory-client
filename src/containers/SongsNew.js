import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import Songform from './Songform';


import {getSongs} from '../actions/songs';

import '../stylesheets/App.css';

class SongsNew extends React.Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }

  
  
  render() {
    
    return (
      <div>
       
      <div className="songtab">
       
        <h3> Create a new tab: </h3>
        <Songform/>
      </div>
     
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps, { getSongs })(SongsNew);
;