export default (state=[], action ) => {
 
  switch(action.type) {
    case 'GET_LYRICS':
      return  action.lyrics;

    case 'CREATE_LYRIC_SUCCESS':
      return state.concat(action.lyric);  

    default: 
      return state;
  }
}