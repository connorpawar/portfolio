import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11y, a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useColorMode } from "@chakra-ui/react";

const CodeRenderer = ({ value, language }) => {
  const { colorMode } = useColorMode();
  return (
    <SyntaxHighlighter
      language={language}
      style={colorMode === "light" ? a11y : a11yDark}
    >
      {value}
    </SyntaxHighlighter>
  );
};

const CodeSnippet = ({ markdown }) => {
  return <ReactMarkdown source={markdown} renderers={{ code: CodeRenderer }} />;
};

export default CodeSnippet;
