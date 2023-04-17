import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true
}

export const slice = createSlice({
  name: 'BuySell',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { set } = slice.actions

export default slice.reducer
