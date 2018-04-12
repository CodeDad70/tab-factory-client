import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import {getSongs} from '../actions/songs';
import SongsShow from './SongsShow';
import SongList from '../components/SongList';
import SongsNew from './SongsNew'

class NavBar extends Component {
  
  componentDidMount() {
    console.log("a")
    this.props.getSongs();
    console.log("b")    
  }

  
  render() {
    const {match, songs} = this.props;
    const logo = "gear-logo-icon-92970.png"
    
    const checkURL = this.props.songId !== "new" 
    
    return (
      <div>
        <div className = "Logo">
         <h1>The Tab Factory
          <img src={`/${logo}`} width="30px" height = "30px" alt="Gear Logo" className = "App-logo"/>
          </h1>
        </div>

        <div className= "Sidebar">
        <Link  className="link-style" to={`/new`}><h4>Create a new Tab</h4></Link>
        <h3> or </h3>
          <h3> Select a song: </h3>
          <SongList songs={songs}  />
        </div>
        <Switch>  
        {checkURL? 
        
         ( <Route exact path={`${match.url}/:songId`} component= {SongsShow}/>): 
          ( <Route path="/new" component={SongsNew} />

        )}
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

export default connect(mapStateToProps, { getSongs })(NavBar);
