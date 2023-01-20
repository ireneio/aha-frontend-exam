import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/system';
import { CacheProvider, EmotionCache } from '@emotion/react';
import store from '../store';
import theme from '../modules/common/styles/theme';
import '../modules/common/styles/index.css';
import createEmotionCache from '../createEmotionCache';
import { ReactNode } from 'react';

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
              <style jsx global>{`
                body {
                  background: #181818;
                }
              `}</style>
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </CacheProvider>
    </SafeHydrate>
  );
}

export default App;
