import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSongs} from '../actions/songs';
import Nav from '../components/Nav';

class NavBar extends Component {
  
  componentDidMount() {
    this.props.getSongs();
  }
  
  render() {
    return (
      <div>

       <Nav songs={this.props.songs}/>
        
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
