import React from 'react';
import './App.css'

class Tabform extends React.Component {

  render() {
    return (
      <div>
         Type the lyrics for your song tab here:
        <form>
          <input type ="text" className = "lyrics" />
        </form>
      </div>  
    )
  }
}

export default Tabform