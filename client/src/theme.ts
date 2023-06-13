import { createTheme } from "@mui/material";
import green from '@mui/material/colors/green';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[500], // you can change the shade if you want
    },
  },
});

export default theme