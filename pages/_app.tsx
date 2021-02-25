import PlayerToolbar from '@components/PlayerToolbar';
import { PlayerProvider } from '@contexts/PlayerContext';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Container from '@material-ui/core/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PlayerProvider>
          <CssBaseline />
          <Component {...pageProps} />
          <PlayerToolbar />
        </PlayerProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
