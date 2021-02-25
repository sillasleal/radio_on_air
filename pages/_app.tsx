import PlayerToolbar from '@components/PlayerToolbar';
import { PlayerProvider } from '@contexts/PlayerContext';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import theme from '../src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PlayerProvider>
          <CssBaseline />
          <PlayerToolbar />
          <Component {...pageProps} />
        </PlayerProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
