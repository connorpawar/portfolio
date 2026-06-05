import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { DisplayCard } from "@components/DisplayCard";
import projects from "../../configs/projects.json";

const byYearDesc = (a: { year: string }, b: { year: string }) =>
  Number(b.year) - Number(a.year);

const active = [...projects].filter((p) => !p.decommissioned).sort(byYearDesc);
const decommissioned = [...projects]
  .filter((p) => p.decommissioned)
  .sort(byYearDesc);

export const ProjectsContent: React.FC = () => (
  <Box>
    <Heading as="h2" size="xl" mb={6}>
      Projects
    </Heading>
    <Stack
      direction={["column", "column", "row"]}
      gap={4}
      flexWrap="wrap"
      alignItems="stretch"
    >
      {active.map((p) => (
        <Box
          key={p.title}
          data-state="open"
          animationDuration="slow"
          animationStyle={{ _open: "scale-fade-in" }}
          width={["100%", "100%", "320px"]}
          flexShrink={0}
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
            decommissioned={p.decommissioned}
          />
        </Box>
      ))}
    </Stack>

    {decommissioned.length > 0 && (
      <Box mt={10}>
        <Heading as="h3" size="lg" mb={4}>
          Decommissioned
        </Heading>
        <Stack
          direction={["column", "column", "row"]}
          gap={4}
          flexWrap="wrap"
          alignItems="stretch"
        >
          {decommissioned.map((p) => (
            <Box
              key={p.title}
              data-state="open"
              animationDuration="slow"
              animationStyle={{ _open: "scale-fade-in" }}
              width={["100%", "100%", "220px"]}
              flexShrink={0}
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
                decommissioned={p.decommissioned}
                compact
              />
            </Box>
          ))}
        </Stack>
      </Box>
    )}
  </Box>
);
