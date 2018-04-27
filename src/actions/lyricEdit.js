// ** Action Creators
export const updateLyricEditData = lyricEditData => {
  return {
    type: 'UPDATED_LYRIC_DATA',
    lyricEditData
  }
}

export const resetLyricEditData = () => {
  return {
    type: 'RESET_LYRIC_FORM'
  }
}