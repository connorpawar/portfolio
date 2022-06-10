import React from "react";
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import "prismjs";
import { DefaultSeo } from "next-seo";
import siteConfig from "configs/site-config";
import { Footer } from "@components/Layout";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: true,
    styles: {
      global: (props) => ({
        "html, body": {
          padding: 0,
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          fontSize: "sm",
          color: props.colorMode === "dark" ? "white" : "#152427",
          background: props.colorMode === "dark" ? "#152427" : "white",
          lineHeight: "tall",
        },
        main: {
          padding: "2rem 0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 0 auto",
        },
        ".container": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          background:
            props.colorMode === "light"
              ? `linear-gradient(rgba(255,255,255,.35), rgba(255,255,255,.35)), url('/tile.png')`
              : `url('/tile-dark.png')`,
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
