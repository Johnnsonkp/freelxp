import Divider from "../components/ui/Divider";
import Head from "next/head";
import LandingPage from "../components/heroSection";
import PostList from "../components/postList";
import { getAllPublished } from "../lib/notion";

export default function Home({ posts }) {
  // if (!posts) return <h1>No posts</h1>;

  return (
    <>
      <Head>
        <title>Chinonso.io | Portfolio</title>
        <meta name="description" content="Chinonso.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className="flex flex-col gap-1">
        <div id="content" className="mb-32 flex flex-col gap-8 md:gap-12">
          <LandingPage />
          <Divider />
          <PostList posts={posts} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

