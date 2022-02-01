import React from "react";
import { Text, Stack, ScaleFade, Heading } from "@chakra-ui/react";
import { NewPostCard } from "./NewPostCard";

export default function PostPreviews({ posts }) {
  return (
    <>
      <Heading as="h2" size="xl" m="10px">
        {" "}
        Most Recent Posts{" "}
      </Heading>
      <Stack direction={["column", "column", "row"]} spacing={4}>
        {posts.map((p) => {
          return (
            <ScaleFade initialScale={0.9} in={true}>
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
            </ScaleFade>
          );
        })}
      </Stack>
    </>
  );
}
