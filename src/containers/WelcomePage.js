import React from 'react';
import { connect } from 'react-redux';
import WelcomeCards from '../components/WelcomeCards';

class WelcomePage extends React.Component {

  render() {

    const showAll = this.props.songs.map (song => 
     
    <div className = "songtab" >
      <WelcomeCards song={song}/>
      <br/><br/>
    </div>
    )
   
  
    return (
      
      
      <div >
          {showAll}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(WelcomePage);
