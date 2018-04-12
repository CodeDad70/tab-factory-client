import React from 'react';
import Songform from './Songform';



import '../stylesheets/App.css';

class SongsNew extends React.Component {


  render() {
    
    return (
      <div className="songtab">
        <h1> Worked ! </h1>
        <div>
        <h3> Create a new tab: </h3>
        <Songform/>
      </div>
      </div>  
    )
  }
}

export default SongsNew;