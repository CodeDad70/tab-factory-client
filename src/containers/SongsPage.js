import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import {getSongs} from '../actions/songs';
import SongsShow from './SongsShow';
import SongList from '../components/SongList';
import SongsNew from './SongsNew'

class SongsPage extends Component {
  
  componentDidMount() {
    console.log("a")
    this.props.getSongs();
    console.log("b")    
  }

  
  render() {
    const {match, songs} = this.props;
    const logo = "gear-logo-icon-92970.png"

    
    return (
      <div>
       
        <Switch>  
          <Route exact path={`${match.url}/:songId`} component= {SongsShow}/> 
          <Route exact path="/songs/new" component={SongsNew} />  
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