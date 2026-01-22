import Divider from "../components/ui/Divider.tsx";
import Head from "next/head";
import LandingPage from "../components/sections/heroSection";
// import PostList from "../components/postList";
import PostList from "../components/post/postList";
import { getAllPublished } from "../lib/notion";

export default function Home({ posts }) {

  return (
    <>
      <Head>
        <title>Chinonso.io | Home</title>
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

