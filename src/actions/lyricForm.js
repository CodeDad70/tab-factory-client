// ** Action Creators
export const updateLyricFormData = lyricFormData => {
  return {
    type: 'LYRIC_UPDATED_DATA',
    lyricFormData
  }
}

export const resetLyricForm = () => {
  return {
    type: 'RESET_LYRIC_FORM'
  }
}