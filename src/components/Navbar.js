import React from 'react';
import { Link } from 'react-router-dom';
import SongsPage from '../containers/SongsPage';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className= "Sidebar">
          <h3> Select a song: </h3>
          <SongsPage songs={this.state.songs}/>
        </div>

      </div>

    )
  }
}

export default Navbar;
