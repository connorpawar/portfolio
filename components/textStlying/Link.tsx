import styled from "@emotion/styled";

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

const Link = ({ children, url, fontSize = "1em", margin = "0px" }) => {
  return (
    <StyledLink href={url} style={{ fontSize: fontSize, margin: margin }}>
      {children}
    </StyledLink>
  );
};

export default Link;
