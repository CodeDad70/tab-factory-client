import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <h1> Worked ! </h1>
        <div>
        <h3> Create a new tab: </h3>
        <Songform/>
      </div>
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