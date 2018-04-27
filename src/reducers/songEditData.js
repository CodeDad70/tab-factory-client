export default (state=[], action ) => {


  console.log(state)
   switch(action.type) {
     
    case 'UPDATED_SONG_DATA':
      return action.songEditData;

    case 'RESET_SONG_FORM':
      return state;  

    default: 
      return state;
  }
}