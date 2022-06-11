import * as React from "react";
import { Box, Heading, Text, Tag, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Feature = ({
  title,
  description,
  url,
  tags,
  pubDate,
  readingTime,
  ...rest
}) => {
  const router = useRouter();
  return (
    <Box
      as="button"
      p={5}
      textAlign="start"
      shadow="sm"
      borderWidth="1px"
      transition="0.2s"
      onClick={() =>
        router.push(`blog/post/${url}`).then(() => window.scrollTo(0, 0))
      }
      _hover={{ shadow: "lg" }}
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Box d="flex" alignItems="baseline">
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          <div>{readingTime} minutes</div>
        </Box>
        <Box as="span" ml="auto" color="gray.600" fontSize="sm">
          {pubDate}
        </Box>
      </Box>
      <Text mt={4} mb={4}>
        {description}
      </Text>
      {tags?.map((tag) => (
        <Tag key={tag} m="2px">
          {tag}
        </Tag>
      ))}
    </Box>
  );
};

export const BlogEntries = ({ posts }) => {
  return (
    <Flex direction={["column", "row"]} wrap="wrap">
      {posts.map((post) => (
        <>
          <Feature
            key={post.urlSlug}
            title={post.title}
            description={post.description}
            url={post.urlSlug}
            tags={post.metaData?.tags}
            pubDate={post.pubDate}
            readingTime={post.readingTime}
            width={["100%", "100%", "40%"]}
            m={["0", "5%"]}
            mt="5%"
          />
        </>
      ))}
    </Flex>
  );
};
