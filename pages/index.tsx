import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import { Hero } from "@components/Hero";
import { useTheme } from "next-themes";

export const Home: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const backgroundColor = resolvedTheme == "light" ? "white" : "#152427";

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
};

export default Home;
