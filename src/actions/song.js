export const currentSong = (song) => {
  console.log("current")
  console.log(song)
  return {
    type: 'CURRENT_SONG',
    song
  }
}