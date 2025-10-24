import { Heading, Container, Tag, Text } from "@chakra-ui/react";
import { fetchEntries } from "@utils/contentfulPosts";
import ContentfulRichText from "@utils/ContentfulRichText";
import { SEO } from "@components/SEO";
import { BackButton } from "@components/Layout/BackButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Post = ({ post }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const backgroundColor = resolvedTheme == "light" ? "white" : "#152427";

  return (
    <>
      <SEO title={post.title} description={post.description} />
      <BackButton />
      <main
        style={{
          display: "flex",
          background: backgroundColor,
          marginTop: "40px",
        }}
      >
        <Container fontSize="lg" maxWidth="120ch" marginBottom="30px">
          <Heading paddingTop="12px">{post.title}</Heading>
          {ContentfulRichText(post.body)}
          <Text>Tags: </Text>
          {post.metaData?.tags?.map((tag, index) => (
            <Tag.Root key={index} size="lg" margin="12px">
              {tag}
            </Tag.Root>
          ))}
        </Container>
      </main>
      {/* Add related posts here */}
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  const paths = posts.map((post) => ({
    params: { urlSlug: post.urlSlug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetchEntries();
  const postObj = await res.find((p) => p.fields.urlSlug === params.urlSlug);
  const post = postObj.fields;
  return { props: { post } };
}

export default Post;
