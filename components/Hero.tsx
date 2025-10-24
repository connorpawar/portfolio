import React, { FC, useEffect, useState } from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "./TextStlying";
import { useTheme } from "next-themes";

export const Hero: FC = () => {
  const { resolvedTheme } = useTheme();
  const imgFilter = resolvedTheme == "light" ? "invert(1)" : "invert(0)";
  const [animate, setAnimate] = useState("closed");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate("open");
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      align="center"
      direction="column"
      minH="40vh"
      px={8}
      mb={{ base: 0, sm: 16 }}
    >
      <Box mb="5">
        <Image width="600px" src="/hero-image-cutout.png" filter={imgFilter} />
        <Box
          flexGrow={1}
          data-state={animate}
          animationDuration="slow"
          animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
          ml="0"
          mr="auto"
        >
          <Flex direction={["column", null, "row"]} alignItems={"center"}>
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
      </Box>
    </Flex>
  );
};
