import React from 'react';
import Head from 'next/head';
import { useColorMode } from '@chakra-ui/react';
import Hero from './Hero';

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Home - Connor Pawar</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/keyboard_2328-fe0f.png"
        />
        <meta
          name="description"
          content="Welcome to my personal site! Reach out to me and checkout some webdev projects."
        />
      </Head>
      <main
        style={{
          display: 'inline-block',
		  background: '#152427',
		  backgroundRepeat: 'no-repeat',
		  backgroundPosition: 'center',
		  backgroundSize: 'cover',
        }}
      >
        <Hero />
      </main>
    </>
  );
}
