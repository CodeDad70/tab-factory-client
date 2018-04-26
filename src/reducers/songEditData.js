const initialState = {name:'song.name', artist: 'song.artist', lyrics:'song.lyrics'}

export default (state=initialState, action ) => {
  console.log(state)
   switch(action.type) {
    case 'UPDATED_SONG_DATA':
      return action.songFormData;

    case 'RESET_SONG_FORM':
      return initialState;  

    default: 
      return state;
  }
}