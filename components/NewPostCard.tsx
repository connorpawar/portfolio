import * as React from "react";
import { Box, Badge, Heading, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const NewPostCard = ({
  image,
  url,
  title,
  desc,
  tags,
  readingTime,
  pubDate,
}) => {
  let { file, description } = image;
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box
      as="button"
      textAlign="start"
      maxW="sm"
      minH="xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="sm"
      transition="0.2s"
      _hover={{ shadow: "lg" }}
      background={colorMode === "light" ? "white" : "gray.900"}
      onClick={() => router.push(`blog/post/${url}`)}
    >
      <img src={`https:${file.url}`} alt={description} />

      <Box p="6" minH="3xs">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="green">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {/* {tags.map(tag => (<Tag ml="4px">{tag}</Tag>))} */}
            {pubDate}
          </Box>
          <Box as="span" ml="auto" color="gray.600" fontSize="sm">
            <div>{readingTime} minutes</div>
          </Box>
        </Box>

        <Heading
          mt="1"
          fontWeight="semibold"
          as="h4"
          size="md"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Heading>

        <Box>{desc}</Box>
      </Box>
    </Box>
  );
};
