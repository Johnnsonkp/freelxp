import '../styles/globals.css'

import Footer from '../components/footer';
import Head from 'next/head';
import Header from '../components/header';
import TopNavInfiniteScroll from '../components/ui/topNavScroll/TopNavScroll';

export default function App({ Component, pageProps }) {
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
        <TopNavInfiniteScroll />
        <div className="mt-8">
          <Header />
        </div>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
