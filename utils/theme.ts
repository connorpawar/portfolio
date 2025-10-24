import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Define the configuration using defineConfig
export const config = defineConfig({
  // Global styles are now applied via the globalCss property
  globalCss: {
    // You replace the dynamic colorMode logic with CSS selectors for light/dark mode
    "html, body": {
      padding: 0,
      margin: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      fontSize: "sm",
      lineHeight: "tall",
      // Light Mode default styles (assuming light mode is default)
    },
    ".light": {
      color: "#152427",
      background: "white",
    },
    // Dark mode styles (assuming 'dark' class is applied by color mode manager, e.g., next-themes)
    ".dark": {
      color: "white",
      background: "#152427",
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
    },
  },
  // You would typically define tokens, semanticTokens, and recipes here
  theme: {
    tokens: {
      // Your other tokens here, if any
    },
  },
});

// Create the system with the default config and your custom config
export const theme = createSystem(defaultConfig, config);
