const initialState = {name:'', artist: '', lyrics:''}

export default (state=initialState, action ) => {
  console.log(state)
   switch(action.type) {
    case 'UPDATED_SONG_DATA':
      return action.songEditData;

    case 'RESET_SONG_FORM':
      return initialState;  

    default: 
      return state;
  }
}