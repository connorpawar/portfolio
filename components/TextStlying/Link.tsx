import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";

const StyledLink = styled.a`
  text-decoration: none;
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

export const Link = ({
  children,
  url,
  fontSize = "1em",
  margin = "0px",
  asText = false,
}) => {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme == "light" ? "black" : "white";

  return (
    <StyledLink href={url} style={{ fontSize: fontSize, margin: margin }}>
      {asText ? <Text color={color}>{children}</Text> : children}
    </StyledLink>
  );
};
