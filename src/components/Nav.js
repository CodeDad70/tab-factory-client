import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SongList from '../components/SongList';

class Nav extends Component {

  render() {
    const songs = this.props.songs;
    const logo = "gear-logo-icon-92970.png"

    return (
      <div>

        <div className="Logo">
          <Link className="logo-link-style" to={"/"}>
            <h1>The Tab Factory
              <img src={`/${logo}`} width="30px" height="30px" alt="Gear Logo" className="App-logo" />
            </h1>
          </Link>
        </div>

        <div className="Sidebar">
          <br/>
          <Link className="link-style" to={`/new`}><h3>Create a new Tab</h3></Link>
          <h5> or </h5>
          <h4> Select a song: </h4>
          <SongList songs={songs} />
        </div>

      </div>
    );
  };
};

export default Nav;
