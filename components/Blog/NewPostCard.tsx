import * as React from "react";
import { Box, Badge, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export const NewPostCard = ({
  image,
  url,
  title,
  desc,
  tags,
  readingTime,
  pubDate,
  post,
  onSelect,
}: {
  image: any;
  url: string;
  title: string;
  desc: string;
  tags?: string[];
  readingTime: number;
  pubDate: string;
  post?: any;
  onSelect?: (post: any) => void;
}) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  return (
    <Box
      as="button"
      textAlign="start"
      width="100%"
      maxW="sm"
      height="420px"
      display="flex"
      flexDirection="column"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="sm"
      transition="0.2s"
      _hover={{ shadow: "lg" }}
      background={resolvedTheme === "light" ? "white" : "gray.900"}
      onClick={() =>
        onSelect ? onSelect(post) : router.push(`blog/post/${url}`)
      }
    >
      <Box
        height="180px"
        flexShrink={0}
        overflow="hidden"
        background={image.fit === "contain" ? "white" : undefined}
        display={image.fit === "contain" ? "flex" : undefined}
        alignItems={image.fit === "contain" ? "center" : undefined}
        justifyContent={image.fit === "contain" ? "center" : undefined}
        p={image.fit === "contain" ? "8" : undefined}
      >
        <img
          src={image.url.startsWith("//") ? `https:${image.url}` : image.url}
          alt={image.description}
          style={{
            width: "100%",
            height: "100%",
            objectFit: image.fit === "contain" ? "contain" : "cover",
            display: "block",
          }}
        />
      </Box>

      <Box p="6" flex="1" overflow="hidden">
        <Box dir="flex" alignItems="baseline">
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
          truncate
        >
          {title}
        </Heading>
        <Box mt="2" lineClamp={3}>
          {desc}
        </Box>
      </Box>
    </Box>
  );
};
