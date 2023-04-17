import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  range: 0
}

export const slice = createSlice({
  name: 'SkillPoints',
  initialState,
  reducers: {
    set: (state, action) => {
      state.range = action.payload
    },
  },
})


export const { set } = slice.actions

export default slice.reducer
