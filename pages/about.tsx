import React, { useEffect, useState, FC } from "react";
import Head from "next/head";
import { Heading, Text, Image, Box } from "@chakra-ui/react";
import { BackButton } from "@components/Layout";
import { Link } from "@components/TextStlying";
import { useTheme } from "next-themes";

export const About: FC = () => {
  const [animate, setAnimate] = useState("close");
  const { resolvedTheme } = useTheme();
  const backgroundColor = resolvedTheme == "light" ? "white" : "#152427";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setAnimate("open");
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>About - Connor Pawar</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/keyboard_2328-fe0f.png"
        />
      </Head>
      <BackButton />
      <main
        style={{
          display: "flex",
          background: backgroundColor,
          marginTop: "40px",
        }}
      >
        <Heading margin="20px">A bit about me...</Heading>
        <br />
        <Image
          borderRadius="full"
          boxSize="175px"
          src="headshot.png"
          alt="Connor Pawar"
          data-state={animate}
          animationDuration="slow"
          animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
        />
        <br />
        <Box margin="20px" w={{ base: "80%", md: "60%" }}>
          <Text fontSize="2xl">
            I'm a senior full-stack Software engineer with a specialization in{" "}
            <Link url="https://dotnet.microsoft.com/en-us/">.NET</Link> and{" "}
            <Link url="https://reactjs.org/">React</Link> . This site is where I{" "}
            <Link url="/projects">experiment</Link> with new ideas/technologies
            and also <Link url="/blog">write</Link> about them from
            time-to-time. Hopefully you enjoy reading about my work, as much as
            I enjoy sharing what I pick up along the way!
          </Text>
        </Box>
      </main>
    </>
  );
};

export default About;
