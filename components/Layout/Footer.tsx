import React from "react";
import styled from "@emotion/styled";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";
import { handleNavAwayClick } from "@utils/helpers";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  margin-top: auto;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: #152427;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <UseAnimations
        onClick={handleNavAwayClick("https://github.com/connorpawar/")}
        animation={github}
        size={56}
        strokeColor="white"
        style={{ padding: 100 }}
      />
      <UseAnimations
        onClick={handleNavAwayClick("https://www.linkedin.com/in/connorpawar/")}
        animation={linkedin}
        size={56}
        strokeColor="white"
        style={{ padding: 100 }}
      />
      {/* Need to add link for twitter */}
      <UseAnimations
        animation={twitter}
        strokeColor="white"
        size={56}
        style={{ padding: 100 }}
      />
    </StyledFooter>
  );
};
