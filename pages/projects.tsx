import React from "react";
import Head from "next/head";
import { Heading, useColorMode, ScaleFade, Stack } from "@chakra-ui/react";
import BackButton from "@components/BackButton";
import { DisplayCard } from "@components/DisplayCard";

import projects from "../configs/projects.json";
import { Darkmode } from "@components/DarkMode";

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Projects - Connor Pawar</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/keyboard_2328-fe0f.png"
        />
      </Head>
      <BackButton />
      <main
        style={{
          display: "flex",
          background:
            colorMode === "light"
              ? `linear-gradient(rgba(255,255,255,.35), rgba(255,255,255,.35)), url('/tile.png')`
              : `url('/tile-dark.png')`,
          backgroundRepeat: "repeat",
        }}
      >
        <>
          <Heading as="h2" size="xl" m="10px">
            Most Recent Projects
          </Heading>
          <Stack direction={["column", "column", "row"]} spacing={4}>
            {projects.map((p) => {
              return (
                <ScaleFade initialScale={0.9} in={true}>
                  <DisplayCard
                    key={p.title}
                    year={p.year}
                    image={p.image}
                    imageDesc={p.imageDesc}
                    title={p.title}
                    desc={p.desc}
                    url={p.url}
                    badgeText={p.badgeText}
                    badgeColor={p.badgeColor}
                  />
                </ScaleFade>
              );
            })}
          </Stack>
        </>
      </main>
    </>
  );
}
