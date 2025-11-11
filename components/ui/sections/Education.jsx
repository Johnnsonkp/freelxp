import { motion, useScroll } from "framer-motion";

import Lilcon from "../Lilcon";
import React from "react";
import { useRef } from "react";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-light text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-20 w-full text-center desk-sm:text-6xl xs:text-5xl">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative desk-sm:w-[100%] max-w-5xl ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-0">
          <Details
            type="Masters of Computer Science"
            time="2025-2027"
            place="Monash University (Part-time, Online)"
            info="Focusing on software architecture, algorithms, and full-stack development using Python, Java, and cloud technologies."
          />
          <Details
            type="Foundations of Software Engineering"
            time="2023-2024"
            place="Holberton"
            info="Relevant courses included computer science fundamentals, data structures, algorithms, and computer systems."
          />
          <Details
            type="Diploma of Information Technology"
            time="2021-2022"
            place="Redhill Institute"
            info="Emphasis on hands-on experience in building and deploying real-world applications across the full stack."
          />

          <Details
            type="High School Certificate"
            time="2010-2012"
            place={"Allsaints Catholic Senior College"}
            // info="Relevant course included Computer Science, Data and Algorithim, Computer Systems"
          />
        </ul>
      </div>
    </div>
  );
}
