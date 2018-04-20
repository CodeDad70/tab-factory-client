
 
export default (state=[], action ) => {
  console.log(action)
  switch(action.type) {
   
   case 'CURRENT_SONG':
    return action.song;


   default: 
     return state;
 }
}

