import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Text, Heading } from "@chakra-ui/react";

import { BlockQuote, CodeSnippet } from "../components/TextStlying";

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType;
      const mimeGroup = mimeType.split("/")[0];

      switch (mimeGroup) {
        case "image":
          return (
            <img
              title={title ? title["en-US"] : null}
              alt={description ? description["en-US"] : null}
              src={file.url}
            />
          );
        case "application":
          return (
            <a href={file["en-US"].url}>
              {title ? title["en-US"] : file["en-US"].details.fileName}
            </a>
          );
        default:
          return (
            <span style={{ backgroundColor: "red", color: "white" }}>
              {" "}
              {mimeType} embedded asset{" "}
            </span>
          );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { code } = node.data.target.fields;
      return <CodeSnippet>{code}</CodeSnippet>;
    },
    [BLOCKS.HEADING_1]: (_node, children) => {
      return (
        <Heading mt={5} mb={5} as="h1" size="2xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_2]: (_node, children) => {
      return (
        <Heading mt={5} mb={5} as="h2" size="xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_3]: (_node, children) => {
      return (
        <Heading mt={5} mb={5} as="h3" size="lg">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_4]: (_node, children) => {
      return (
        <Heading mt={5} mb={5} as="h4" size="md">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_5]: (_node, children) => {
      return (
        <Heading mt={5} mb={5} as="h5" size="sm">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_6]: (_node, children) => {
      return (
        <Heading mt={5} mb={5} as="h6" size="xs">
          {children}
        </Heading>
      );
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return (
        <Text mt={5} mb={5} fontSize="lg">
          {children}
        </Text>
      );
    },
    [BLOCKS.QUOTE]: (_node, children) => {
      return (
        <div>
          <BlockQuote quoteText={children} quoter={"author"} />
        </div>
      );
    },
  },
};

let ContentfulRichText = function (text) {
  return documentToReactComponents(text, richTextOptions);
};

export default ContentfulRichText;
