import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "@components/TextStlying";

export const AboutContent: React.FC = () => (
  <Box>
    <Heading as="h2" size="xl" mb={6}>
      A bit about me...
    </Heading>
    <Image
      borderRadius="full"
      boxSize="175px"
      src="headshot.png"
      alt="Connor Pawar"
      mb={4}
      data-state="open"
      animationDuration="slow"
      animationStyle={{ _open: "scale-fade-in" }}
    />
    <Box
      data-state="open"
      animationDuration="slow"
      animationStyle={{ _open: "scale-fade-in" }}
    >
      <Text fontSize="2xl">
        I&apos;m a senior Fullstack Software Engineer with a specialization in{" "}
        <Link url="https://dotnet.microsoft.com/en-us/">.NET</Link> and{" "}
        <Link url="https://reactjs.org/">React</Link>. This site is where I
        experiment with new ideas/technologies and also write about them from
        time-to-time. Hopefully you enjoy reading about my work, as much as I
        enjoy sharing what I pick up along the way!
      </Text>
    </Box>
  </Box>
);
