import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Box } from "@chakra-ui/react";
import { BlogEntries, PostPreviews } from "@components/Blog";
import { SearchBar } from "@components/Layout";

export const BlogContent: React.FC<{
  posts: any[];
  onSelectPost?: (post: any) => void;
}> = ({ posts, onSelectPost }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<any[]>(posts);

  const fuse = new Fuse(posts, { keys: ["title", "author.firstName"] });

  useEffect(() => {
    setFilteredPosts(fuse.search(searchTerm));
  }, [searchTerm]);

  return (
    <Box>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredPosts={filteredPosts}
        placeholder="Narrow down some topics!"
        onSelect={onSelectPost}
        width="100%"
        mb="10px"
      />
      <PostPreviews posts={posts.slice(0, 3)} onSelectPost={onSelectPost} />
      <Box width={["80%", "80%", "80%"]}>
        <BlogEntries posts={posts.slice(3)} onSelectPost={onSelectPost} />
      </Box>
    </Box>
  );
};
