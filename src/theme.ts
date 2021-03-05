import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: { default: '#FFFBE5' },
    primary: {
      main: '#333333'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: ['Ubuntu Condensed', 'sans-serif'].join(',')
  }
  //font-family: 'Ubuntu Condensed', sans-serif;
});

export default theme;
