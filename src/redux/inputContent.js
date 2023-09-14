import { createSlice } from "@reduxjs/toolkit";

export const inputContentSlice = createSlice({
  name: "inputContent",
  initialState: "",
  reducers: {
    setInputContent: (state, action) => {
      return action.payload
    }
  }
})

export const { setInputContent } = inputContentSlice.actions
export default inputContentSlice.reducer