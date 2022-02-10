import React, { FC } from "react";
import Head from "next/head";
import { Hero } from "@components/Hero";
import { useColorModeValue } from "@chakra-ui/react";

export const Home: FC = () => {
	const backgroundColor = useColorModeValue("white", "#152427");
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
			display: "inline-block",
			background: backgroundColor,
		  }}
		>
		  <Hero />
		</main>
	  </>
	);
}

export default Home;