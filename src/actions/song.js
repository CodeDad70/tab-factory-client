export const currentSong = (song) => {
  console.log("current state")
  console.log(song)
  
  return {
    type: 'CURRENT_SONG',
    song
  }
}