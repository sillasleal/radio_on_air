import PlayerToolbar from '@components/PlayerToolbar';
import { PlayerProvider } from '@contexts/PlayerContext';
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <PlayerToolbar />
      <Component {...pageProps} />
    </PlayerProvider>
  );
}

export default MyApp;
