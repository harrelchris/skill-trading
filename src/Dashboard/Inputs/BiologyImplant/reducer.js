import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modifier: 0.00,
}

export const slice = createSlice({
  name: 'BiologyImplant',
  initialState,
  reducers: {
    set: (state, action) => {
      state.modifier = Number.parseFloat(action.payload);
    },
  },
})


export const { set } = slice.actions

export default slice.reducer
