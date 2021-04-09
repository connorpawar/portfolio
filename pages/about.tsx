import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Heading, Text, Img, useColorMode, SlideFade } from '@chakra-ui/react';
import BackButton from '@components/BackButton';

export default function About() {
  const { colorMode } = useColorMode();

  const [animate, setAnimate] = useState(false);

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
          display: 'flex',
          background:
            colorMode === 'light'
              ? `linear-gradient(rgba(255,255,255,.35), rgba(255,255,255,.35)), url('/tile.png')`
              : `url('/tile-dark.png')`,
          backgroundRepeat: 'repeat',
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
            style={{ transform: 'rotate(-20deg)' }}
          />
        </SlideFade>
        <br />
        <Text fontSize="2xl" margin="20px" w={{ base: '80%', md: '60%' }}>
          <SlideFade in={animate}>
            I'm a professional fullstack developer with a specialization in
            React. I also work a lot with C# .NET Core and server side JS (I
            plan on learning some Deno soon!), so I have experience with all
            kinds of web development. This site is where I experiment with new
            ideas/technologies and also write about them from time-to-time.
            Hopefully you enjoy reading about my work, as much as I enjoy
            sharing what I pick up along the way!
          </SlideFade>
        </Text>
      </main>
    </>
  );
}
