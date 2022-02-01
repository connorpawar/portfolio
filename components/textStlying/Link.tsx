import styled from "@emotion/styled";
import { useColorModeValue } from "@chakra-ui/react";

const StyledLink = styled.a`
  font-size: 1em;
  text-decoration: none;
  color: #121314;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 60%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: rgba(144, 205, 244, 0.5);
  }

  &:hover:after {
    top: 0%;
  }
`;

const Link = ({ children, url }) => {
  return <StyledLink href={url}>{children}</StyledLink>;
};

export default Link;
