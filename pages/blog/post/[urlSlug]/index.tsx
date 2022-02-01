import { Heading, Container, Tag, Text, useColorMode } from "@chakra-ui/react";
import { fetchEntries } from "@utils/contentfulPosts";
import ContentfulRichText from "@utils/ContentfulRichText";
import SEO from "@components/SEO/SEO";
import BackButton from "@components/BackButton";
// import api from '@utils/api';

const Post = ({ post }) => {
  //   const router = useRouter();
  //   let resp = api.getReactions(post.urlSlug).then((ans) => console.log(ans));

  const { colorMode } = useColorMode();

  return (
    <>
      <SEO title={post.title} description={post.description} />
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
        <Container fontSize="lg" maxWidth="120ch" marginBottom="30px">
          <Heading paddingTop="12px">{post.title}</Heading>
          {ContentfulRichText(post.body)}
          <Text>Tags: </Text>
          {post.metaData?.tags?.map((tag, index) => (
            <Tag key={index} size="lg" margin="12px">
              {tag}
            </Tag>
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
