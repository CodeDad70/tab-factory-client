import React, { Component } from 'react';
import Songs from './Songs'
import Songform from './Songform';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div>

        <div className = "songtab">
          Test
        </div>
        
        <div className = "Logo">
          <h1> The Tab Factory 
          <img src = "gear-logo-icon-92970.png" width="30px" height = "30px" alt="Gear Logo" className = "App-logo"/></h1><br/>
        </div>
        
        <div className="Sidebar">    
          {/* <img src={} className="" alt="" /> */} 
          <h3> Select a Song : </h3>       
          <Songs/>
        </div>

        <div className = "New-song">
          <h3> Create a new tab: </h3>
          <Songform/>
        </div>
        

      </div>  
    );
  }
}

export default App;
