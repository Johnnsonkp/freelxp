import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

import AnimatedText from "../components/ui/AnimatedText";
import Education from "../components/ui/sections/Education";
import Experience from "../components/Experience";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/ui/Layout";
import Link from "next/link";
import { Skills } from "../components/Skills";
import SmoothImgLoad from "../components/ui/SmoothImgLoad";
import profilePic2 from "/public/dev-headshot.jpeg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]),
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(8) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

  return <span ref={ref}></span>;
};

function about() {
  return (
    <>
      <Head>
        <title>Chinonso.io | About Page</title>
        <meta name="description" content="About me"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light desk-sm:overflow-hidden  mx-auto">
        <Layout className="desk-sm:p-5 !pt-10 max-w-7xl">
          <AnimatedText text="Purposefully Driven!" className="mb-16" />
          <div className="grid w-full grid-cols-9 grid-rows-1 gap-16 desk-sm:flex-col desk-sm:grid-cols-2">

            <div className="col-span-3 h-80 relative rounded-2xl border-2 border-solid border-dark bg-light2 p-8 dark:bg-dark dark:border-light desk-sm:!order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light2" />
              <div className="w-full h-[280px] overflow-hidden">
                <SmoothImgLoad 
                  src={profilePic2}
                  alt="Chinonso"
                  className="w-full rounded-2xl border-2 border-solid border-dark  bg-[#202020]"
                  priority
                  fill={false}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </div>
{/* 
                <div className="col-span-3 flex flex-col items-start justify-start desk-sm:!order-2">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                  About Me
                </h2>
                <p className="font-medium">
                  Hi, I&apos;m{" "}
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
                  >
                    John Nkpolukwu,{" "}
                  </Link>
                  a Melbourne-based{" "}Software Engineer{" "}
                  and Computer Science Master&apos;s student with over 3 years of hands-on experience delivering high-performance web and backend solutions. I specialise in full stack development using Python, React, Next.js, and Node.js, with a growing focus on machine learning, MLOps, and AI integration.
                </p>
                <p className="font-medium my-4">
                  I&apos;ve shipped production features for major retailers like Myer, built custom e-commerce solutions for agencies, and recently led the development of an AI-powered platform for tech event discovery. From integrating RESTful APIs and automating workflows to reducing critical user errors by 10%, I thrive in fast-paced agile environments where technical excellence meets{" "}
                  <Link
                    target="_blank"
                    href="https://www.workshopper.com/post/what-is-ux-and-why-is-it-important#:~:text=UX%20Design%20in%20turn%2C%20is,%2C%20efficient%2C%20and%20relevant%20experience."
                    className="italic border-b-2 border-orange-400"
                  >
                    exceptional user experience.
                  </Link>
                </p>
                <p className="font-medium">
                  Whether you need a reliable full stack developer, someone to architect your next web application, or help integrating AI capabilities into your product I bring both technical depth and entrepreneurial drive. Available for freelance projects, contract work, and collaborative opportunities.
                </p>

              </div> */}
            </div>

            
            <div className="col-span-4 flex flex-col items-start justify-start desk-sm:!order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I&apos;m{" "}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
                >
                  John Nkpolukwu,{" "}
                </Link>
                a Melbourne-based{" "}Software Engineer{" "}
                and Computer Science Master&apos;s student with over 3 years of hands-on experience delivering high-performance web and backend solutions. I specialise in full stack development using Python, React, Next.js, and Node.js, with a growing focus on machine learning, MLOps, and AI integration.
              </p>
              <p className="font-medium my-4">
                I&apos;ve shipped production features for major retailers like Myer, built custom e-commerce solutions for agencies, and recently led the development of an AI-powered platform for tech event discovery. From integrating RESTful APIs and automating workflows to reducing critical user errors by 10%, I thrive in fast-paced agile environments where technical excellence meets{" "}
                <Link
                  target="_blank"
                  href="https://www.workshopper.com/post/what-is-ux-and-why-is-it-important#:~:text=UX%20Design%20in%20turn%2C%20is,%2C%20efficient%2C%20and%20relevant%20experience."
                  className="italic border-b-2 border-orange-400"
                >
                  exceptional user experience.
                </Link>
              </p>
              <p className="font-medium">
                Whether you need a reliable full stack developer, someone to architect your next web application, or help integrating AI capabilities into your product I bring both technical depth and entrepreneurial drive. Available for freelance projects, contract work, and collaborative opportunities.
              </p>

            </div>

            {/* <div className="col-span-3 h-80 relative rounded-2xl border-2 border-solid border-dark bg-light2 p-8 dark:bg-dark dark:border-light desk-sm:!order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light2" />
              <div className="w-full h-[280px] overflow-hidden">
                <SmoothImgLoad 
                  src={profilePic2}
                  alt="Chinonso"
                  className="w-full rounded-2xl border-2 border-solid border-dark  bg-[#202020]"
                  priority
                  fill={false}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </div>
            </div> */}

            <div className="col-span-2 flex flex-col items-end justify-between desk-sm:flex-row desk-sm:!order-3 desk-sm:text-center desk-sm:!m-auto desk-sm:items-center ">
              <div className="flex flex-col items-end justify-center desk-sm:items-center desk-sm:!px-2">
                <span className="inline-block text-7xl font-bold desk-sm:text-5xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center desk-sm:items-center desk-sm:!px-2">
                <span className="inline-block text-7xl font-bold desk-sm:text-5xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center desk-sm:!items-center desk-sm:!px-2">
                <span className="inline-block text-7xl font-bold desk-sm:text-5xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <hr className="mt-8" />
          {/* <StillCarousel /> */}
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
