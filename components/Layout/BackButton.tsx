import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      color="rgba(144, 205, 244, 1)"
      aria-label="Go Home"
      size="lg"
      width="100px"
      onClick={router.back}
      icon={<ArrowLeftIcon />}
      top="1em"
      position="absolute"
      marginLeft="1em"
      zIndex="1000"
    />
  );
};
