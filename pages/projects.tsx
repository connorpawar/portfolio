import React, { FC } from "react";
import Head from "next/head";
import { Heading, ScaleFade, Stack, useColorModeValue } from "@chakra-ui/react";
import { DisplayCard } from "@components/DisplayCard";
import { BackButton } from "@components/Layout";

import projects from "../configs/projects.json";

const Projects: FC = () => {
  const backgroundColor = useColorModeValue("white", "#152427");

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
          background: backgroundColor,
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

export default Projects;