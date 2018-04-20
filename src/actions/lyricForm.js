// ** Action Creators
export const updateLyricFormData = lyricFormData => {
  return {
    type: 'LYRIC_UPDATED_DATA',
    lyricFormData
  }
}

export const resetSongForm = () => {
  return {
    type: 'RESET_LYRIC_FORM'
  }
}