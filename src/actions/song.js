export const currentSong = (song) => {
  return {
    type: 'CURRENT_SONG',
    song
  }
}

export const emptySong = () => {
  return {
    type: 'EMPTY_SONG',
  }
}

