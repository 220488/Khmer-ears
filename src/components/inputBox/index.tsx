import React, { useCallback } from "react"
import "../../styles/text_box.scss"
import { TextField, TextFieldProps, ThemeProvider, createTheme } from "@mui/material"
import theme from "../../styles/color_theme"
import { useDispatch, useSelector } from "react-redux"
import { setInputContent } from "../../redux/inputContent"

const InputBox = () => {
  const dispatch = useDispatch()
  const onChangeHandler = useCallback((event: any) => {
    dispatch(
      setInputContent(event.target.value)
    )
  }, [])
  
  return (
    <div className="text-box-container">
      <ThemeProvider theme={theme}>
      <TextField
        id="text-input"
        variant="outlined"
        fullWidth
        multiline
        color="primary"
        onChange={onChangeHandler}
      ></TextField>
      </ThemeProvider>
    </div>
  )
}

export default InputBox