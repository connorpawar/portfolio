import styled from "@emotion/styled";
import { useColorModeValue } from "@chakra-ui/react";

const Quote = styled.blockquote`
  font-size: 1.2em;
  width: 100%;
  margin: 50px auto;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid #48bb78;
  line-height: 1.6;
  position: relative;
  background: #ededed;

  &:before {
    font-family: Arial;
    color: #48bb78;
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
  }

  &:after {
    content: "";
  }
`;

export const BlockQuote = ({ quoteText, quoter }) => {
  const bg = useColorModeValue("#EDEDED", "#282828");
  const txtColor = useColorModeValue("#555555", "#FFFFFF");

  return (
    <Quote style={{ background: bg, color: txtColor }}>
      {quoteText}
    </Quote>
  );
};
