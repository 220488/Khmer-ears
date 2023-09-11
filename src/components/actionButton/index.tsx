import { ThemeProvider } from "@mui/material"
import theme from "../../styles/color_theme"
import Button, { ButtonProps } from '@mui/material/Button';
import styled from "@emotion/styled";
import { purple, yellow } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ffffff",
  fontSize: 16,
  padding: "10px 40px",
  backgroundColor: yellow[600],
  '&:hover': {
    backgroundColor: purple[400]
  }
}))

const ActionButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorButton variant="contained" color="secondary" style={{ marginTop: '80px'}}>GO!</ColorButton>
    </ThemeProvider>
  )
}

export default ActionButton