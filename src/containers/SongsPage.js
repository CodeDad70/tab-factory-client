import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {getSongs} from '../actions/songs';
import SongsShow from './SongsShow';
import Songnav from '../components/Songnav';

class SongsPage extends Component {
  
  componentDidMount() {
    this.props.getSongs();
    
  }
 
  

  render() {
    const {match, songs} = this.props;
   
    
    return (
      <div>
        <div className= "Sidebar">
          <h3> Select a song: </h3>
          <Songnav songs={songs}  />
        </div>

        <Switch>
          
            <Route path={`${match.url}/:songId`} component= {SongsShow}/>
           
        </Switch>

      </div>    
    );   
  };
};
  

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps, { getSongs })(SongsPage);
