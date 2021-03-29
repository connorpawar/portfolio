import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  ColorModeScript,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Footer from '@components/Footer';
import 'prismjs';
import { DefaultSeo } from 'next-seo';
import siteConfig from 'configs/site-config';

function App({ Component, pageProps }: AppProps): React.ReactNode {
  const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles: {
      global: (props) => ({
        'html, body': {
          padding: 0,
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          fontSize: 'sm',
          color: props.colorMode === 'dark' ? 'white' : 'gray.600',
          lineHeight: 'tall',
        },
        a: {
          color: props.colorMode === 'dark' ? 'green.300' : 'green.500',
        },
        main: {
          padding: '2rem 0',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '1 0 auto',
        },
        '.container': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
        },
      }),
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <DefaultSeo {...siteConfig.seo} />
      <div className="container">
        <Component {...pageProps} />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
export default App;
