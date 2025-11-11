import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const dynamicRoute = (sentence) => {
  switch (sentence) {
    case "Vacation Rental Host":
      return "https://www.airbnb.com.au/users/show/447493012";
      break;
    case "Shopify Developer":
      return "/projects";
      break;
    default:
      return "/projects";
  }
};

export const AnimatedText = ({ textArr, text, style, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden desk-sm:py-0 max-w-[1400px]">
      <motion.h1
        className={`inline-block w-full text-dark !font-bold capitalise text-7xl dark:text-light ${className} desk-sm:!text-50px`}
        variants={quote}
        initial="initial"
        animate="animate"
        style={style}
      >
        <a href="#" title={text} />
        {text &&
          text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block desk-sm:!text-[3.5rem] desk-sm:!block"
              variants={singleWord}
              initial="initial"
              animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          ))}

        {textArr &&
          textArr.map((sentence, index) => {
            return (
              <div
                key={sentence + "-" + index}
                className={
                  "cursor-pointer hover:bg-green-300 hover:text-light inline-block desk-sm:!text-[2.1rem] desk-sm:!text-left"
                }
              >
                <Link
                  key={sentence + "-" + index}
                  href={`${dynamicRoute(sentence)}`}
                  target={`${
                    sentence === "Vacation Rental Host" ? "_blank" : ""
                  }`}
                >
                  {sentence.split(" ").map((word, index) => (
                    <motion.span
                      key={word + "-" + index}
                      className={"inline-block"}
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </Link>
                {/* <span className="sm:hidden">;</span> */}
              </div>
            );
          })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
