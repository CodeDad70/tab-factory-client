
 
export default (state=[], action ) => {
  console.log(action)
  switch(action.type) {
   
   case 'CURRENT_SONG':
   return state.concat(action.song);


   default: 
     return state;
 }
}

