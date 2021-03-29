import React from "react";
import { handleNavClick } from "@utils/helpers";
import { IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      color="blue.600"
      aria-label="Go Home"
	  size="lg"
	  width="100px"
	  m="5px"
      onClick={handleNavClick(router, "/")}
      icon={<ArrowLeftIcon />}
    />
  );
};

export default BackButton;
