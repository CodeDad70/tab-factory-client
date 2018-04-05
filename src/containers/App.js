import React, { Component } from 'react';
import Songs from './Songs'
import './App.css';


const songs = [
  {
    name: "Imagine",
    artist: "John Lennon"
  },
  {
    name: "If I Should Fall From the Grace of God",
    artist: "The Pogues"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={} className="" alt="" /> */}
          <h1 className="App-title">Welcome to the Tab Factory</h1>
        </header>
        <div className="App-intro">
        <Songs songs={songs}/>
         Let make a tab!!!
        </div>
      </div>
    );
  }
}

export default App;
