export default (state = [], action) => {
  console.log(action)
  
  switch (action.type) {

    case 'EMPTY_SONG':
      return action.song = [];

    case 'CURRENT_SONG':
      return action.song;
    
    case 'CURRENT_COUNT':
      return action.song;
        
    default:
      return state;
  };
};

