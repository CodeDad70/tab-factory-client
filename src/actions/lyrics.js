import {resetLyricForm} from './lyricForm';

// **Action Creators

export const emptyLyric = (lyric) => {
  return {
    type: 'EMPTY_LYRIC',
    lyric
  }
}

const setLyrics = lyrics => {
  console.log("d")
  return {
    type: 'GET_LYRICS',
    lyrics
  }
}

const addLyric = (lyric) => {
  return {
    type: 'CREATE_LYRIC_SUCCESS',
    type: 'CURRENT_LYRIC',
    lyric
  }
}


//**Async Actions
export const getLyrics = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/lyrics')
      .then(response => response.json())
      
      .then(lyrics => dispatch(setLyrics(lyrics)))
      .then(console.log("c"))
      .catch(error => {
      })
  }
}

export const createLyric = lyric => {
  return dispatch => {
    return fetch ('http://localhost:3001/api/lyrics',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({lyric: lyric})
    })
    .then(response => response.json())
    .then(lyric => {
      dispatch(addLyric(lyric))
      dispatch(resetLyricForm())
    })
    .catch(error => console.log(error))
  }
}