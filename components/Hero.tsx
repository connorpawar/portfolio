import React from "react";
import {
  Box,
  Flex,
  Img,
  ScaleFade,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { handleNavAwayClick } from "@utils/helpers";

interface NavItemType {
  displayText: string;
  linkTo: (e: any) => void;
}

const NavMenuItems = ({ displayText, linkTo }: NavItemType) => {
  const textColor = useColorModeValue("white", "#282828");
  const hoverColor = useColorModeValue("blue.600", "blue.900");

  return (
    <Button
      variant="link"
      color={textColor}
      ml={{ base: 0, sm: 10 }}
      display={{ base: "block", sm: "inline-block" }}
      mb={{ base: "10", sm: "0" }}
      fontSize="20px"
      onClick={linkTo}
      _hover={{ bg: hoverColor }}
      _focus={{ boxShadow: "outline" }}
    >
      {displayText}
    </Button>
  );
};

export default function Hero() {
  const router = useRouter();

  const handleNavClick = (href: string) => (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Flex
      align="center"
      direction="column"
      minH="40vh"
      px={8}
      mb={{ base: 0, sm: 16 }}
    >
      <Box mb="5">
        <Img width="600px" src="/hero-image-cutout.png" />
        <Box flexGrow={1} ml={{ base: "40%", sm: "24%" }} mr="auto">
          <ScaleFade initialScale={0.9} in={true}>
            <NavMenuItems
              displayText="Projects"
              linkTo={handleNavClick("/projects")}
            />
            <NavMenuItems displayText="Blog" linkTo={handleNavClick("/blog")} />
            <NavMenuItems
              displayText="About"
              linkTo={handleNavClick("/about")}
            />
          </ScaleFade>
        </Box>
      </Box>
    </Flex>
  );
}
