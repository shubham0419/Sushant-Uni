import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: []
  },
  reducers: {
    todoSetter: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { todoSetter } = todoSlice.actions
export default todoSlice.reducer