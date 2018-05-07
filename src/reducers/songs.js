export default (state=[], action ) => {
  switch(action.type) {
    case 'GET_SONGS':
      return  action.songs;
    
    case 'DELETE_SONG':
    
    return  action.songs;  

    default: 
      return state;
  }
}