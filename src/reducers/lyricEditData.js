export default (state=[{}], action ) => {


  console.log(state)
   switch(action.type) {
     
    case 'UPDATED_LYRIC_DATA':
      
    return action.lyricEditData;

    case 'RESET_LYRIC_FORM':
      return action.lyricEditData={};
      

    default: 
      return state;
  }
}