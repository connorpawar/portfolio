import React from "react";
import {useRouter} from 'next/router';
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, StarIcon } from "@chakra-ui/icons";

export const Darkmode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Button
      aria-label="darkmode toggle"
      label="darkmode"
      variant="solid"
      onClick={toggleColorMode}
      marginLeft={router.pathname === "/" ? "5em" : "10em"}
	  width="5em"
      top="1em"
	  position="relative"
      zIndex="1000"
      size="lg"
    >
      {colorMode === "light" ? <MoonIcon /> : <StarIcon />}
    </Button>
  );
};
