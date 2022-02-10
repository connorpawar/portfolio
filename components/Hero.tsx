import React, { FC } from "react";
import {
  Box,
  Flex,
  Img,
  ScaleFade,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "./TextStlying";

export const Hero: FC = () => {
  const imgFilter = useColorModeValue("invert(1)", "invert(0)");

  return (
    <Flex
      align="center"
      direction="column"
      minH="40vh"
      px={8}
      mb={{ base: 0, sm: 16 }}
    >
      <Box mb="5">
        <Img width="600px" src="/hero-image-cutout.png" filter={imgFilter} />
        <Box flexGrow={1} ml="0" mr="auto" a>
          <ScaleFade initialScale={0.9} in={true}>
            <Flex direction={["column", null, "row"]} alignItems={"center"}>
              <Box>
                <Link url="/projects" fontSize="3em">
                  Projects
                </Link>
              </Box>
              <Spacer />
              <Box>
                <Link url="/blog" fontSize="3em">
                  Blog
                </Link>
              </Box>
              <Spacer />
              <Box>
                <Link url="/about" fontSize="3em">
                  About
                </Link>
              </Box>
            </Flex>
          </ScaleFade>
        </Box>
      </Box>
    </Flex>
  );
}
