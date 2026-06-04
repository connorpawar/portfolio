import React, { FC } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "./TextStlying";

export const Hero: FC = () => {
  return (
    <Flex
      align="center"
      direction="column"
      minH="40vh"
      px={8}
      mb={{ base: 0, sm: 16 }}
    >
      <Box mb="5" flexGrow={1}>
        <Flex direction={["column", null, "row"]} alignItems="center">
          <Box>
            <Link url="/projects" fontSize="3em" asText>
              Projects
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link url="/blog" fontSize="3em" asText>
              Blog
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link url="/about" fontSize="3em" asText>
              About
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
