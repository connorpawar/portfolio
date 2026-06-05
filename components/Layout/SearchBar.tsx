import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Box,
  VStack,
  StackSeparator,
  Text,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useTheme } from "next-themes";

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  filteredPosts,
  placeholder,
  onSelect = undefined,
  ...rest
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleChange = (event) => setSearchTerm(event.target.value);

  const { resolvedTheme } = useTheme();
  const linkBg = resolvedTheme == "light" ? "gray.100" : "gray.700";

  return (
    <Box {...rest} background={linkBg} position="relative">
      <InputGroup
        startElement={
          <Box
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<SearchIcon color="green.400" />}
          />
        }
      >
        <Input
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          placeholder={placeholder}
          size="lg"
        />
      </InputGroup>
      <Box
        display={open ? "block" : "none"}
        bg={linkBg}
        w="100%"
        position="absolute"
        zIndex="2"
      >
        <VStack
          separator={<StackSeparator borderColor="gray.200" />}
          spaceY={1}
          align="stretch"
        >
          {filteredPosts.slice(0, 10).map((result) => (
            <Box
              as="button"
              textAlign="left"
              onMouseDown={(e: any) => e.preventDefault()}
              onClick={() => onSelect?.(result?.item)}
              shadow="sm"
              transition="0.2s"
              _hover={{ shadow: "lg" }}
            >
              <Heading size="sm" margin="3px">
                {result?.item?.title ?? ""}
              </Heading>
              <Text fontSize="sm" margin="3px">
                {result?.item?.description ?? ""}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
