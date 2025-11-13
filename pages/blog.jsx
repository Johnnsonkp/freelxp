import { getAllPublished, getAllPublishedExcludeYouTube } from '../lib/notion'

import Head from 'next/head'
import PostList from '../components/postList'
import React from 'react'

function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Chinonso.io | Blog</title>
        <meta name="description" content="Chinonso.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className="flex flex-col gap-1 mt-20 px-4 sm:px-6 md:px-8">
        <div id="content" className="mb-32 flex flex-col gap-8 md:gap-12 max-w-7xl mx-auto w-full">
          <PostList posts={posts} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublishedExcludeYouTube();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

export default Blog