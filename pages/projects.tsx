import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { DisplayCard } from "@components/DisplayCard";
import { BackButton } from "@components/Layout";

import projects from "../configs/projects.json";
import { useTheme } from "next-themes";

const Projects: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

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
          marginTop: "40px",
        }}
      >
        <>
          <Heading as="h2" size="xl" m="10px">
            Most Recent Projects
          </Heading>
          <Stack direction={["column", "column", "row"]} spaceX={4}>
            {projects.map((p) => {
              return (
                <Box
                  key={p.title}
                  data-state="open"
                  animationDuration="slow"
                  animationStyle={{ _open: "scale-fade-in" }}
                >
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
                </Box>
              );
            })}
          </Stack>
        </>
      </main>
    </>
  );
};

export default Projects;
