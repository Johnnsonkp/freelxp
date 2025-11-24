import './Header.module.css';

import Image from 'next/image';
import Link from 'next/link';
import SocialIconNav from './SocialIconNav';
import SwitchButton from '../buttons/SwitchButton';
import logo from "/public/transparent-logo.png";
import { motion } from "framer-motion";
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useState} from 'react';

const CustomLink = ({ title, href, className }) => {
  const router = useRouter();
  const highlight = `bg-[#26184A] dark:bg-[#ec5899]`;
  const highlightText = `text-[#26184A] dark:text-[#ec5899]`;

  return (
    <Link
      href={href}
      className={`${className} 
        relative group px-5 
        cursor-pointer h-[100%] overflow-hidden
        ${router.asPath === href ? highlightText : "dark:text-light"}
        group-hover:highlightText
        `
      }
      style={{
        fontWeight: router.asPath === href && "semi-bold" 
      }}
    >
      {title}
      <span
        className={`
          ${router.asPath === href ? "w-full" : "w-0"} 
          h-[2.5px] inline-block absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 
          z-10 bg-dark !hover:w-full
          ${router.asPath === href && highlight}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// overflow-hidden
const CustomMobileLink = ({ title, href, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group border-[#EBF0F5] px-8 text-light dark:text-dark mt-1`}
      style={{
        background:
          router.asPath === href
            ? "linear-gradient(360deg, rgba(107, 216, 111, 0.8) -94.82%, rgba(49, 239, 195, 0) 70.64%)"
            : "transparent",
        color: router.asPath === href && "rgba(22, 163, 73, 1)",
      }}
    >
      {title}
      <span style={{backgroundColor: 'rgba(107, 216, 111, 1)'}}
        className={`h-[3px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light overflow-hidden`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!router.asPath.includes("/posts")) {
      const header = document.querySelector("header");
      if (header) header.style.backgroundColor = "transparent";
    }
  }, [router])

  return (
    <header
      className={`w-[100%] md:px-20 h-13 py-2 mt-2 font-medium  m-auto  dark:text-light mb-0 relative border-darkBorder !sm:px-3`} 
      style={{boxSizing: "border-box border-b-2"}}
    >
      <div className='flex justify-between items-center w-full max-w-7xl mx-auto p-0'>
        <span
          className={`
          h-[1px] inline-block bg-[#9999993e] absolute left-0 -bottom-[-0.2rem] group-hover:w-full transition-[width] ease duration-300
          dark:bg-darkBorder overflow-hidden w-full z-20`}
        >
          &nbsp;
        </span>

        <Link href="/" className="flex align-middle justify-center items-center">
          <h1 className="font-bold mt-1 text-lg">CHINONSO</h1>
          <Image src={logo} className={"mr-4 py-0 px-0 w-9 bg-[#F5F5F5] rounded-[10rem]"} alt="logo"/>
        </Link>
        <button
          className="flex-col justify-center items-center md:hidden"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      <div className="w-full flex justify-between items-center ml-20 desk-sm:hidden">
        <nav className="py-0 mt-0">
          <CustomLink 
            href={"/"} 
            title={"Home"} 
            className={`py-3 px-2  cursor-pointer`} 
          />
          <CustomLink 
            href={"/about"} 
            title={"About"} 
            className={`py-3 px-5 cursor-pointer `} 
          />
          <CustomLink
            href={"/projects"}
            title={"Projects"}
            className={"py-3 px-5 text-black cursor-pointer border-none"}
          />
          
          <CustomLink
            href={"/blog"}
            title={"Blog"}
            className={"py-3 px-5 text-black cursor-pointer border-none"}
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          {/* <SocialIconNav /> */}
          {/* <SwitchButton /> */}
          <motion.a
            href="mailto:john.nkp1@gmail.com"
            target={"_blank"}
            whileHover={{ y: -0 }}
            whileTap={{ scale: 0.9 }}
            className="w-30 mx-3 bg-neonGradient bg-neon-gradient text-[#fff] text-sm font-semibold py-2 px-5 rounded-md "
          >
            <button>Get in touch</button>
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className={`py-3 px-2`}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className={`py-3 px-5`}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              className={"py-3 px-5"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/articles"}
              title={"Articles"}
              className={"py-3 px-5"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/study"}
              title={"Study"}
              className={"py-3 px-5"}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              {/* <TwitterIcon /> */}
            </motion.a>
            <motion.a
              href="https://github.com/Johnnsonkp"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              {/* <GithubIcon /> */}
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              {/* <LinkedInIcon /> */}
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
      {/* </div> */}

      </div>
    </header>
  );
};

export default Header;

