import {resetSongForm} from './songForm';

// **Action Creators
const setSongs = songs => {
  return {
    type: 'GET_SONGS',
    songs
  }
}

const addSong = song => {
  return {
    type: 'CREATE_SONG_SUCCESS',
    song
  }
}

//**Async Actions
export const getSongs = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/songs')
      .then(response => response.json())
      .then(songs => dispatch(setSongs(songs)))
      .catch(error => console.log(error))
  }
}

export const createSong = song => {
  return dispatch => {
    return fetch ('http://localhost:3001/api/songs',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({song: song})
    })
    .then(response => response.json())
    .then(song => {
      dispatch(addSong(song))
      dispatch(resetSongForm())
    })
    .catch(error => console.log(error))
  }
}