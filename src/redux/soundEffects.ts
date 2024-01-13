import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: '', age: 0, email: '' }

export const soundEffectSlice = createSlice({
  name: 'soundEffect',
  initialState: { value: initialState },
  // add all the functions
  reducers: {
    playClap: (state, action) => {
      // change the state value from payload
      state.value = action.payload
    },
  },
})

// will be used for actions
export const { playClap } = soundEffectSlice.actions

export default soundEffectSlice.reducer
