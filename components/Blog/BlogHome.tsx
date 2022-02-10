import React, { useState, useEffect } from "react";
import Head from "next/head";
import Fuse from "fuse.js";
import { Box, useColorMode } from "@chakra-ui/react";
import { BlogEntries, PostPreviews } from "@components/Blog";
import { SEO } from "@components/SEO";
import { BackButton, SearchBar } from "@components/Layout";

export const BlogHome = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<any>(posts);
  const { colorMode } = useColorMode();

  const options = {
    keys: ["title", "author.firstName"],
  };

  const fuse = new Fuse(posts, options);

  useEffect(() => {
    setFilteredPosts(fuse.search(searchTerm));
  }, [searchTerm]);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/fire_1f525.png"
        />
        <SEO
          title="Blog Home"
          description="Learn about some of the quirks of software and web development 
					in an easy to follow format. Come check out my dev scribbles!"
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
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredPosts={filteredPosts}
          placeholder="Narrow down some topics!"
          width={["80%", "80%", "50%", "30%"]}
          mb="10px"
        />
        <PostPreviews posts={posts.slice(0, 3)} />
        <Box width={["80%", "80%", "80%"]}>
          <BlogEntries posts={posts.slice(3, posts.length)} />
        </Box>
      </main>
    </>
  );
}
