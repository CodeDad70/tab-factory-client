const initialState = {name:'', artist:'', id:'', lyrics:[]}
 
export default (state=initialState, action ) => {
  switch(action.type) {
   case 'CURRENT_SONG':
   return Object.assign({}, state, {
    song: [
      ...state.song, action.song
    ]
  });


   default: 
     return state;
 }
}

