import { ThemeProvider } from "@mui/material"
import theme from "../../styles/color_theme"
import Button, { ButtonProps } from '@mui/material/Button';
import styled from "@emotion/styled";
import { purple, yellow } from "@mui/material/colors";
import chatCompletion from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../redux/types/type";
import { setOutputContent } from "../../redux/outputContent";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ffffff",
  fontSize: 20,
  fontWeight: 800,
  padding: "10px 40px",
  backgroundColor: yellow[600],
  '&:hover': {
    backgroundColor: purple[400]
  }
}))

const ActionButton = () => {
  const dispatch = useDispatch()
  const inputKhmerPronunciation = useSelector((state:stateProps ) => state.inputContent)

  const onClickHandler = async () => {  
    chatCompletion(inputKhmerPronunciation).then(value => {
      dispatch(
        setOutputContent(value.choices[0].message.content)
      )
    }).catch(reason => {
      console.log("reason", reason)
      dispatch(
        setOutputContent(reason)
      )
    })
    
  }

  return (
    <ThemeProvider theme={theme}>
      <ColorButton
        variant="contained"
        color="secondary"
        style={{ marginTop: '80px'}}
        onClick={onClickHandler}
      >GO!</ColorButton>
    </ThemeProvider>
  )
}

export default ActionButton