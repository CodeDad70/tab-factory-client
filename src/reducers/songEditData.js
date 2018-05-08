export default (state=[], action ) => {
  
  switch(action.type) {
     
    case 'UPDATED_SONG_DATA':
      return action.songEditData;

    case 'RESET_SONG_FORM':
      return action.songEditData=[]; 

    default: 
      return state;
  };
};