import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSongs} from '../actions/songs';
import Songnav from '../components/Songnav';

class Welcome extends Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }
  render() {
    const {match, songs} = this.props;
   
    
    return (
      <div>
        <div className= "songtab">
        <h1> Welcome to the Tab Factory</h1>

          <h3> Select a song to see it's tab: </h3>
          <Songnav songs={songs} />
        </div>

        
      </div>    
    );   
  };
};
  

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps, { getSongs })(Welcome);
