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

interface AnimatedTextProps {
  textArr?: string[];
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const AnimatedText = ({ textArr, text, style, className = "" }: AnimatedTextProps) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden desk-sm:py-0 max-w-[1400px]">
      <motion.h1
        className={`inline-block w-full text-dark !font-bold capitalise text-7xl dark:text-light ${className} desk-sm:!text-50px`}
        variants={quote}
        initial="initial"
        animate="animate"
        style={style}
      >
        <Link href="#" title={text} />
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
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
