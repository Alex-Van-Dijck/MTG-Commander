import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Theme = createTheme({
    typography:{
      fontFamily:['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'].join(''),
    },
    palette: {
      primary: {
        main: '#db212c',
      },
      secondary: {
        main: '#fcce2e',
      },
      background:{
          default:'#f5fffa'
      },
      divider:'rgba(255, 255, 255, 0.12)',
      text:{
        primary:grey[900],
      },
      mode:'light'
    },
  });