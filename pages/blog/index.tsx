import React from "react";
import { fetchEntries } from "../../utils/contentfulPosts";
import BlogHome from "@components/BlogHome";

const Blog = ({ posts }) => <BlogHome posts={posts} />;

export async function getStaticProps() {
  const res = await fetchEntries();
  let posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
