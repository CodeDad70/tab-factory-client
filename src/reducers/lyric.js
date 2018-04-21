export default (state=[], action ) => {
  console.log(action)
  switch(action.type) {
   
   case 'CURRENT_LYRIC':
    return action.lyric;


   default: 
     return state;
 }
}

