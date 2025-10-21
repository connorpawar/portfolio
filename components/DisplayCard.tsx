import * as React from "react";
import { Box, Badge, Heading, Img, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const DisplayCard = ({
  image,
  imageDesc,
  url,
  title,
  desc,
  year,
  badgeText,
  badgeColor,
}) => {
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
      onClick={() => router.push(url)}
    >
      <Box m="5">
        <Img
          src={image}
          alt={imageDesc}
          objectFit="cover"
          boxSize="300px"
          borderRadius="full"
        />
      </Box>
      <Box p="6" minH="3xs">
        <Box dir="flex" alignItems="baseline">
          <Badge borderRadius="full" px="4" colorScheme={badgeColor}>
            {badgeText}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            textTransform="uppercase"
            ml="2"
          >
            {year}
          </Box>
        </Box>
        <Heading
          mt="1"
          fontWeight="semibold"
          as="h4"
          size="lg"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Heading>
        <Box fontSize="md">{desc}</Box>
      </Box>
    </Box>
  );
};
