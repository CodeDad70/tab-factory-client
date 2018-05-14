export default (state = [], action) => {

  switch (action.type) {

    case 'EMPTY_SONG':
      return action.song = [];

    case 'GET_SONGS':
      return action.songs;

    case 'CURRENT_COUNT':
      return action.song;

    case 'DELETE_SONG':
      const song =  state.filter(song => song.id !== action.song);
      state = song
      return state

    case 'UPDATE_SONG_COUNTER':
      return state.map(song => {
        if (song.id === action.song.id) {
          return action.song
        } else {
          return song
        }
      })

    case 'ADD_SONG':
      return state.concat(action.song)

    case 'UPDATE_SONG_LIST':
      return state.map(song => {
        if (song.id === action.song.id) {
          return action.song
        } else {
          return song
        }
      })


    default:
      return state;
  };
};