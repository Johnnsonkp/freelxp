import '../styles/globals.css'

import Footer from '../components/footer';
import Head from 'next/head';
import Header from '../components/ui/header/Header.jsx';
import SideNav from '@/components/ui/nav/SideNav';
import TopNavInfiniteScroll from '../components/ui/topNavScroll/TopNavScroll';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chinonso.io</title>
        <meta name="description" content="Chinonso.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="f5a1658a-c52b-4f4e-b795-f389fe7d11e9"></script>
      </Head>
      <main id="root" className="flex flex-col gap-1">
        <TopNavInfiniteScroll />
        <div className="mt-8">
          <Header />
        </div>
        {/* <div className='flex gap-11'> */}
          {/* <SideNav /> */}
          <Component {...pageProps} />
        {/* </div> */}
        <Footer />
      </main>
    </>
  )
}
