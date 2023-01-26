import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/system';
import { CacheProvider, EmotionCache } from '@emotion/react';
import store from '../store';
import theme from '../styles/theme';
import createEmotionCache from '../createEmotionCache';
import { ReactNode } from 'react';

import '../styles/index.css';

const clientSideEmotionCache = createEmotionCache();

function SafeHydrate({ children }: { children: ReactNode }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

interface AppPropsExtended extends AppProps {
  emotionCache: EmotionCache;
}

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsExtended) {
  return (
    <SafeHydrate>
      <CacheProvider value={emotionCache}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <div data-cid="App">
              <CssBaseline />
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </CacheProvider>
    </SafeHydrate>
  );
}

export default App;
