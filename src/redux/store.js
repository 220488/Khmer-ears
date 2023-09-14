import { configureStore } from '@reduxjs/toolkit'
import inputContentReducer from './inputContent'
import outputContentReducer from './outputContent'

export default configureStore({
  reducer: {
    inputContent: inputContentReducer,
    outputContent: outputContentReducer,
  }
})