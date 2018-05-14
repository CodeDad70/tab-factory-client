import React from 'react'
import { resetSongForm } from './songForm';
import { resetSongEditData } from './songEdit';

// **Action Creators
const setSongs = songs => {
  return {
    type: 'GET_SONGS',
    songs
  }
}

export const addSong = song => {
  return {
    type: 'ADD_SONG',
    song,
  }
}

export const deleteSongUpdate = song => {
  return {
    type: 'DELETE_SONG',
    song
  }
}

const updateSongCounter = song => {
  return {
    type: 'UPDATE_SONG_COUNTER',
    song
  }
}

export const updateSongList = song => {
  return {
    type: 'UPDATE_SONG_LIST',
    song
  }
}

//** Async Actions
export const getSongs = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/songs')
      .then(response => response.json())
      .then(songs => dispatch(setSongs(songs)))
      .then(console.log("c"))
      .catch(error => console.log(error))
  }
}

export const createSong = (song, history) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ song: song }),
    })
      .then(response => response.json())
      .then(song => {
        dispatch(addSong(song))
        history.push(`/songs/${song.id}`)
        dispatch(resetSongForm())
      })
      .catch(error => console.log(error))
  }
}

export const updateSong = (song, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/songs/${song.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ song: song })
    })
      .then(response => response.json())
      .then(song => {
        dispatch(updateSongList(song))
        history.push(`/songs/${song.id}`)
        dispatch(resetSongEditData())
      })
      .catch(error => console.log(error))
  }
}

export const updateCounter = song => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/songs/${song.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ song: song })
    })
      .then(response => response.json())
      .then(song => {
        dispatch(updateSongCounter(song))
      })
      .catch(error => console.log(error))
  }
}

export const deleteSong = (id, history) => {

  return dispatch => {
    return fetch(`http://localhost:3001/api/songs/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .then(song => {
        history.push(`/`)
        dispatch(deleteSongUpdate(id))
      })
      .catch(error => console.log(error))
  }
}