import React, { Component } from 'react';
import Songs from './Songs'
import './App.css';


class App extends Component {
 
  constructor() {
    super()
    this.state = {
      songs: []    
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3001/api/songs')
      .then(response => response.json())
      .then(songs => this.setState({songs}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={} className="" alt="" /> */}
          <h1 className="App-title">Welcome to the Tab Factory</h1>
        </header>
        <div className="App-intro">
        <Songs songs={this.state.songs}/>
        </div>
      </div>
    );
  }

}

export default App;
