import React, { Component } from 'react';
import Songs from './Songs'
import Songform from './Songform';
import './App.css';


class App extends Component {
 
  render() {
    return (
      <div className="Sidebar">    
          {/* <img src={} className="" alt="" /> */}
          <h1> The Tab Factory</h1>
          <h2> Select a Song : </h2>       
          <Songs/>
          <Songform/>

      </div>
    );
  }
}

export default App;
