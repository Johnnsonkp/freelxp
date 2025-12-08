import './Header.module.css';

import {CustomLink, CustomMobileLink} from '../buttons/CustomLink';

import Image from 'next/image';
import Link from 'next/link';
import SiteLogo from '../icons/SiteLogo';
import SocialIconNav from './SocialIconNav';
import SwitchButton from '../buttons/SwitchButton';
import logo from "/public/transparent-logo.png";
import { motion } from "framer-motion";
import siteConfig from '../../../site.config';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useState} from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const navigationLinks = siteConfig.navigationLinks || [];
  const siteLogoTitle = siteConfig.siteLogoTitle || 'LOGO';
  const siteLogo = siteConfig.siteLogo || logo;

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

        <SiteLogo hideTitle={false} />
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
          {navigationLinks && navigationLinks.map((link) => (
              <CustomLink 
                key={link.href}
                href={link.href} 
                title={link.title} 
                className={`py-3 px-5 cursor-pointer`} 
              />
            ))}
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
            {navigationLinks && navigationLinks.map((link) => (
                <CustomMobileLink 
                  key={link.href}
                  href={link.href} 
                  title={link.title} 
                  className={`py-3 px-5 cursor-pointer`} 
                  toggle={handleClick}
                />
              ))}
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

