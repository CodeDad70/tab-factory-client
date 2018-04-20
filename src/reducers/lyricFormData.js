const initialState = {words:'', chords: '', song_id:''}

export default (state=initialState, action ) => {
  console.log(state)
   switch(action.type) {
    case 'LYRIC_UPDATED_DATA':
      return action.lyricFormData;

    case 'RESET_LYRIC_FORM':
      return initialState;  

    default: 
      return state;
  }
}