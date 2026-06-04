import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { DisplayCard } from "@components/DisplayCard";
import projects from "../../configs/projects.json";

export const ProjectsContent: React.FC = () => (
  <Box>
    <Heading as="h2" size="xl" mb={6}>
      Most Recent Projects
    </Heading>
    <Stack direction={["column", "column", "row"]} gap={4}>
      {projects.map((p) => (
        <Box
          key={p.title}
          data-state="open"
          animationDuration="slow"
          animationStyle={{ _open: "scale-fade-in" }}
          width={["100%", "100%", "auto"]}
        >
          <DisplayCard
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
      ))}
    </Stack>
  </Box>
);
