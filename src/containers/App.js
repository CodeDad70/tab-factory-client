import React, { Component } from 'react';
import Songs from './Songs'
import Songform from './Songform';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div>
        <div className="Sidebar">    
          {/* <img src={} className="" alt="" /> */}
          <h1> The Tab Factory</h1>
          <h2> Select a Song : </h2>       
          <Songs/>
          <Songform/>
        </div>
          
        <div className = "songtab">
          Test
        </div>

        
          <img src = "gear-logo-icon-92970.png" width="80px" height = "80px" alt="Gear Logo" className = "App-logo"/>
        

      </div>  
    );
  }
}

export default App;
