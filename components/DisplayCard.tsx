import * as React from "react";
import { Box, Badge, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export const DisplayCard = ({
  image,
  imageDesc,
  url,
  title,
  desc,
  year,
  badgeText,
  badgeColor,
  decommissioned = false,
  compact = false,
}) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  return (
    <Box
      as={decommissioned ? "div" : "button"}
      textAlign="start"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="sm"
      transition="0.2s"
      cursor={decommissioned ? "default" : "pointer"}
      opacity={decommissioned ? 0.75 : 1}
      _hover={decommissioned ? {} : { shadow: "lg" }}
      background={resolvedTheme === "light" ? "white" : "gray.900"}
      onClick={decommissioned ? undefined : () => router.push(url)}
    >
      <Box
        m={compact ? "3" : "5"}
        display="flex"
        justifyContent="center"
        flexShrink={0}
      >
        <Image
          src={image}
          alt={imageDesc}
          objectFit="cover"
          boxSize={compact ? "100px" : "300px"}
          borderRadius="full"
        />
      </Box>
      <Box
        p={compact ? "4" : "6"}
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <Box
          dir="flex"
          alignItems="baseline"
          display="flex"
          flexWrap="wrap"
          gap="2"
        >
          <Badge borderRadius="full" px="4" colorScheme={badgeColor}>
            {badgeText}
          </Badge>
          {decommissioned && (
            <Badge borderRadius="full" px="4" colorScheme="gray">
              Decommissioned
            </Badge>
          )}
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
          size={compact ? "md" : "lg"}
          lineHeight="tight"
          truncate
        >
          {title}
        </Heading>
        <Box fontSize={compact ? "sm" : "md"}>{desc}</Box>
      </Box>
    </Box>
  );
};
