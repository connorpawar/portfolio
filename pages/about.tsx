import React, { useEffect, useState, FC } from "react";
import Head from "next/head";
import { Heading, Text, Img, SlideFade, useColorModeValue } from "@chakra-ui/react";
import { BackButton } from "@components/Layout";
import { Link } from "@components/TextStlying";

export const About: FC = () => {
  const [animate, setAnimate] = useState(false);
  const backgroundColor = useColorModeValue("white", "#152427");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

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
          backgroundRepeat: "repeat",
          marginTop: "40px",
        }}
      >
        <Heading margin="20px">Wanna learn a little about me?</Heading>
        <br />
        <SlideFade in={animate}>
          <Img
            borderRadius="full"
            boxSize="175px"
            src="headshot.png"
            alt="Connor Pawar"
            style={{ transform: "rotate(-20deg)" }}
          />
        </SlideFade>
        <br />
        <Text fontSize="2xl" margin="20px" w={{ base: "80%", md: "60%" }}>
          <SlideFade in={animate}>
            I'm a professional fullstack developer with a specialization in{" "}
            <Link url="https://reactjs.org/">React</Link>. I also work a lot
            with <Link url="https://dotnet.microsoft.com/en-us/">.NET</Link> and
            server side JS (I plan on learning some Deno soon!), so I have
            experience with all kinds of web development. This site is where I{" "}
            <Link url="/projects">experiment</Link> with new ideas/technologies
            and also <Link url="/blog">write</Link> about them from
            time-to-time. Hopefully you enjoy reading about my work, as much as
            I enjoy sharing what I pick up along the way!
          </SlideFade>
        </Text>
      </main>
    </>
  );
}

export default About;