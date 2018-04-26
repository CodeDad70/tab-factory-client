// ** Action Creators
export const updateSongEditData = songEditData => {
  return {
    type: 'UPDATED_SONG_DATA',
    songEditData
  }
}

export const resetSongEdit = () => {
  return {
    type: 'RESET_SONG_FORM'
  }
}