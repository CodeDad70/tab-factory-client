import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SongsShow from '../containers/SongsShow';
import Songform from '../containers/Songform'

class SongsPage extends Component {
  render() {
    const match = this.props.match;
    
    return (
      
      <div>
        <Switch>
          <Route exact path={`${match.url}/:songId`} component={SongsShow}/>
          <Route exact path="/songs/new" component={Songform}/>
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

export default connect(mapStateToProps)(SongsPage);