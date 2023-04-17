import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  level: 0
}

export const slice = createSlice({
  name: 'BiologySkill',
  initialState,
  reducers: {
    set: (state, action) => {
      state.level = action.payload
    },
  },
})


export const { set } = slice.actions

export default slice.reducer
