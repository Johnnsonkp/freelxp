import React, { useEffect, useState } from "react";

import Footer from "./footer";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SmoothImgLoad from "./ui/SmoothImgLoad";
import { getAllPublishedExcludeYouTube } from "../lib/notion";
import useColorThief from "use-color-thief";
import { useRouter } from 'next/router'

export default function PostDetail({ post }) {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState(post);

  // const getPosts = async () => {
  //   const data = await getAllPublishedExcludeYouTube();
  //   return data;
  // }

  if (!selectedPost) return null;

  const { palette } = useColorThief(selectedPost.metadata.cover, { format: "hex", colorCount: 6 });
  const imgSrc = "/headshot-bw.jpeg";

  
  useEffect(() => {
    if (palette && palette.length >= 6) {
      if (palette[5]) {
        const headerContent = document.querySelector("#headerContent");
        if (headerContent) headerContent.style.backgroundColor = palette[5];
        document.querySelector("meta[name=theme-color]")?.setAttribute("content", palette[5]);
        const header = document.querySelector("header");
        if (header) header.style.backgroundColor = palette[5];
      }

      if (palette[1]) {
        const title = document.querySelector("#title");
        if (title) title.style.color = palette[1];
      }

      const paletteChildren = document.querySelector("#palette")?.children;
      if (paletteChildren) {
        [...paletteChildren].forEach((child, index) => {
          if (palette[index]) {
            child.style.backgroundColor = palette[index];
          }
        });
      }
    }
  }, [palette, selectedPost.markdown, selectedPost.metadata]);


  return (
    <article>
      <meta name="theme-color" />
      {/* <header className="bg-black py-4 md:py-16 h-screen md:h-auto"> */}
      <header id="headerContent" className="py-3 md:py-3 md:pb-10 mt-[-5px] h-full md:h-auto">
        {/* <div className="flex flex-col  gap-12"> */}
        {/* Control buttons */}
          <div className="w-full flex justify-between max-w-7xl mx-auto px-3 pb-2">
            <button
              className="text-white/75 hover:opacity-75 transition duration-200 ease-in-out md:p-2 md:rounded-full md:bg-white/20"
              onClick={() => (router.back == null) ? router.push("/") : router.back()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
              </svg>
            </button>

            <div className="flex flex-row gap-4">
              <button className="text-white/75 hover:opacity-75 transition duration-200 ease-in-out md:p-2 md:rounded-full md:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                </svg>
              </button>
              <button className="text-white/75 hover:opacity-75 transition duration-200 ease-in-out md:p-2 md:rounded-full md:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"/>
                </svg>
              </button>
            </div>
          </div>
            
        <div className="flex justify-around max-w-7xl mx-auto sm:flex-col sm:gap-10 md:flex-row md:gap-0">
          <div className="container max-w-2xl mx-auto px-2 pt-0 flex-col justify-between items-end flex-[0.6]">
            {/* Control buttons */}
            {/* <div className="w-full flex justify-between">
              <button
                className="text-white/75 hover:opacity-75 transition duration-200 ease-in-out md:p-2 md:rounded-full md:bg-white/20"
                onClick={() => (router.back == null) ? router.push("/") : router.back()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
              </button>

              <div className="flex flex-row gap-4">
                <button className="text-white/75 hover:opacity-75 transition duration-200 ease-in-out md:p-2 md:rounded-full md:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                  </svg>
                </button>
                <button className="text-white/75 hover:opacity-75 transition duration-200 ease-in-out md:p-2 md:rounded-full md:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"/>
                  </svg>
                </button>
              </div>
            </div> */}
            {/* title  */}
            {/* <div className="container max-w-8xl px-1 pt-4">
              <h1
                id="title" 
                className="font-bold text-[32px] md:text-5xl text-white brightness-150 leading-[36px] tracking-tight text-left"
                style={{textShadow: "2px 3px 5px rgba(0,0,0,0.10)"}}
              >
                {post.metadata.title}
              </h1>
            </div> */}

            <div className="container max-w-3xl px-0 mx-auto pt-3">          
              <div id="picture" className="relative w-[100%] overflow-hidden aspect-video rounded-lg md:rounded-xl shadow-2xl">
                {/* <Image fill className="object-cover" src={selectedPost.metadata.cover} alt={selectedPost.metadata.title} priority={"true"}/> */}
                <SmoothImgLoad 
                  src={selectedPost.metadata.cover}
                  alt={selectedPost.metadata.title}
                  className={`object-cover `}
                  fill={true} 
                  priority={"true"}
                />
              </div>
              {/* <div>
                <hr className="divide mt-6 mb-4 border-white/20"></hr>
                <div className="flex justify-between items-center text-white/75 text-base">
                  <p>by <span id="author" className="font-medium">John Nkpolukwu</span></p>
                  <p id="date">{post.metadata.date}</p>
                </div>
              </div> */}
            </div>
            
          </div>

          <div className="container max-w-8xl mx-auto px-0 flex-col flex-[0.43]">

            <div className="container max-w-8xl px-0 pt-4 ">
              <h1
                id="title" 
                className="font-bold text-[30px] md:text-5xl text-white brightness-150 leading-[36px] tracking-tight text-left"
                style={{textShadow: "2px 3px 5px rgba(0,0,0,0.10)"}}
              >
                {selectedPost.metadata.title}
              </h1>
            </div>

            <div className="">
              <p id="desc" className="mt-9 text-white/75 text-[1.2rem] font-medium">{selectedPost.metadata.description}</p>
              <hr className="divide mt-6 mb-1 border-white/20"></hr>
              <div className="flex justify-between items-center text-white/75 text-base py-2">

                <div className="flex align-middle justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-background shadow-2xl">
                    {imgSrc && 
                      <SmoothImgLoad 
                        src={imgSrc}
                        alt="Chinonso John Nkpolukwu"
                        className="w-full h-full object-cover"
                        fill={false}
                        width={200}
                        height={200}
                        quality={100}
                      />}
                  </div>
                  {/* <p className="font-medium inline-block p-2">by <span id="author" className="font-medium inline-block">John Nkpolukwu</span></p> */}
                  <p className="font-medium inline-block p-2 py-4">John Nkpolukwu</p>
                </div>

                <p id="date">{selectedPost.metadata.date}</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      <ReactMarkdown className="my-12 prose  prose-neutral dark:prose-invert container max-w-2xl mx-auto px-6">
        {selectedPost.markdown?.parent ?? selectedPost.markdown}
      </ReactMarkdown>
      {/* <Footer /> */}
    </article>
  );
}
