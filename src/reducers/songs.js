export default (state=[], action ) => {
  switch(action.type) {
    case 'GET_SONGS':
      return  action.songs;

    case 'CREATE_SONG_SUCCESS':
      return state.concat(action.song);  
    
    case 'DELETE_SONG':
    
    return  action.songs;  

    default: 
      return state;
  }
}