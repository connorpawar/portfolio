import React from "react";
import { Button, useBreakpointValue } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, StarIcon } from "@chakra-ui/icons";

export const Darkmode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const marginLeft = useBreakpointValue({ base: "80%", md: "90%", sm: "70%" });

  return (
    <Button
      aria-label="darkmode toggle"
      label="darkmode"
      variant="solid"
      onClick={toggleColorMode}
      marginLeft={marginLeft}
      top="1em"
      position="absolute"
      zIndex="1000"
      size="lg"
    >
      {colorMode === "light" ? <MoonIcon /> : <StarIcon />}
    </Button>
  );
};
