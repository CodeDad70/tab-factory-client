export default (state = [], action) => {

  switch (action.type) {

    case 'GET_SONGS':
      return action.songs;

      case 'DELETE_SONG':
      return state.filter(song => song.id !== action.song.id );


    case 'UPDATE_SONG_COUNTER':
      return state.map(song => {
        if (song.id === action.song.id) {
          return action.song
        } else {
          return song
        }
      })


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