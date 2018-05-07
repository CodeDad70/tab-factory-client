import React from 'react';
import { connect } from 'react-redux';
import Songform from './Songform';
import { getSongs } from '../actions/songs';



class SongsNew extends React.Component {

  componentDidMount() {
    this.props.getSongs();

  }

  render() {
    return (

      <div className="main-stage">
        <h1> Create a new tab: </h1>
        
        <Songform />
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