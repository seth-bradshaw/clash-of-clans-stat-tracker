import { createSlice, configureStore } from '@reduxjs/toolkit'
// example of slice 
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
});
const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;