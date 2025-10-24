import React from "react";
import { Stack, Heading, Box } from "@chakra-ui/react";
import { NewPostCard } from "./NewPostCard";

export const PostPreviews = ({ posts }) => {
  return (
    <>
      <Heading as="h2" size="xl" m="10px">
        {" "}
        Most Recent Posts{" "}
      </Heading>
      <Stack direction={["column", "column", "row"]} spaceX={4}>
        {posts.map((p) => {
          return (
            <Box
              data-state="open"
              animationDuration="slow"
              animationStyle={{ _open: "scale-fade-in" }}
            >
              <NewPostCard
                key={p.urlSlug}
                pubDate={p.pubDate}
                image={p.splashImg.fields}
                title={p.title}
                desc={p.description}
                readingTime={p.readingTime}
                tags={p.metaData.tags}
                url={p.urlSlug}
              />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};
