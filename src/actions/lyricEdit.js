// ** Action Creators
export const updateSongEditData = lyricEditData => {
  return {
    type: 'UPDATED_LYRIC_DATA',
    lyricEditData
  }
}

export const resetSongEditData = () => {
  return {
    type: 'RESET_LYRIC_FORM'
  }
}