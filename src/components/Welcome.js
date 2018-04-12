import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSongs} from '../actions/songs';
import SongList from '../components/SongList';

class Welcome extends Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }
  render() {
    const {match, songs} = this.props;
    const logo = "gear-logo-icon-92970.png"
    
    return (
      <div>
        <div className= "welcome">

        <h3> Welcome to </h3>
        
        
         <h1 className="welcome-logo">The Tab Factory
          <img src={`/${logo}`} width="30px" height = "30px" alt="Gear Logo" className = "App-logo"/>
          </h1>
          
        

          <h3> Select a song to see it's tab: </h3>
          <SongList songs={songs} />
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
