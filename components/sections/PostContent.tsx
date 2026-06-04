import React from "react";
import { Box, Container, Heading, Tag, Text } from "@chakra-ui/react";
import ContentfulRichText from "@utils/ContentfulRichText";

interface Props {
  post: any;
  onBack: () => void;
}

export const PostContent: React.FC<Props> = ({ post, onBack }) => (
  <Container fontSize="lg" maxWidth="120ch" pb="40px">
    <Box
      as="button"
      onClick={onBack}
      mb={6}
      fontSize="sm"
      opacity={0.5}
      transition="opacity 0.15s"
      background="none"
      border="none"
      cursor="pointer"
      fontFamily="inherit"
      color="inherit"
      _hover={{ opacity: 1 }}
    >
      ← Back to Blog
    </Box>
    <Heading pt={2} mb={4}>
      {post.title}
    </Heading>
    {ContentfulRichText(post.body)}
    <Text mt={6}>Tags:</Text>
    {post.metaData?.tags?.map((tag: string, index: number) => (
      <Tag.Root key={index} size="lg" margin="4px">
        {tag}
      </Tag.Root>
    ))}
  </Container>
);
