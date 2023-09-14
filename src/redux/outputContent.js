import { createSlice } from "@reduxjs/toolkit";

export const outputContentSlice = createSlice({
  name: "outputContent",
  initialState: "",
  reducers: {
    setOutputContent: (state, action) => {
      return action.payload
    }
  }
})

export const { setOutputContent } = outputContentSlice.actions
export default outputContentSlice.reducer