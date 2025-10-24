import React from "react";
import { AppProps } from "next/app";
import "prismjs";
import { DefaultSeo } from "next-seo";
import siteConfig from "configs/site-config";
import { Footer } from "@components/Layout";
import { Provider } from "@components/ui/provider";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

// export function useColorMode(): UseColorModeReturn {
//   const { resolvedTheme, setTheme, forcedTheme } = useTheme()
//   const colorMode = forcedTheme || resolvedTheme
//   const toggleColorMode = () => {
//     setTheme(resolvedTheme === "dark" ? "light" : "dark")
//   }
//   return {
//     colorMode: colorMode as ColorMode,
//     setColorMode: setTheme,
//     toggleColorMode,
//   }
// }

// export function useColorModeValue<T>(light: T, dark: T) {
//   const { colorMode } = useColorMode()
//   return colorMode === "dark" ? dark : light
// }

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Provider>
      <DefaultSeo {...siteConfig.seo} />
      <div className="container">
        <ThemeProvider>
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </div>
      {/* </CacheProvider> */}
    </Provider>
  );
}
export default App;
