import React, { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-circularLight dark:text-dark sm:text-[11px]"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <Image src="/images/green-dot-2.png" alt={name} width={20} height={20} className="pr-2" />
      {name}
    </motion.div>
  );
};

export function Skills() {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (window && window.innerWidth < 700) {
      setWidth(window.innerWidth);
    }
  }, []);
  return (
    <div className="dark:hidden">
      <h2 className="font-bold text-7xl mt-64 w-full text-center sm:mt-20">
        Skills
      </h2>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full  bg-circularLightWhite dark:text-light dark:bg-circularLightDark sm:!h-[80vh] sm:mt-10 sm:w-[105%]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-circularLight dark:text-dark "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill
          className="dark:bg-circularLight dark:text-dark"
          name="HTML"
          x={`${width < 700 ? "-28vh" : "-28vw"}`}
          y={`${width < 700 ? "5vh" : "5vw"}`}
        />
        <Skill
          name="CSS"
          x={`${width < 700 ? "-14vh" : "-14vw"}`}
          y={`${width < 700 ? "-10vh" : "-7vw"}`}
        />
        <Skill
          name="Javascript"
          x={`${width < 700 ? "20vh" : "20vw"}`}
          y={`${width < 700 ? "16vh" : "6vw"}`}
        />
        <Skill
          name="ReactJS"
          x={`${width < 700 ? "0vh" : "0vw"}`}
          y={`${width < 700 ? "18vh" : "8vw"}`}
        />
        <Skill
          name="NodeJS"
          x={`${width < 700 ? "-5vh" : "-5vw"}`}
          y={`${width < 700 ? "27vh" : "17vw"}`}
        />
        <Skill
          name="NextJS"
          x={`${width < 700 ? "-20vh" : "-20vw"}`}
          y={`${width < 700 ? "-25vh" : "-15vw"}`}
        />
        <Skill
          name="Postgresql"
          x={`${width < 700 ? "-25vh" : "-32vw"}`}
          y={`${width < 700 ? "-15vh" : "-8vw"}`}
        />
        <Skill
          name="Shopify (Liquid)"
          x={`${width < 700 ? "12vh" : "12vw"}`}
          y={`${width < 700 ? "-14vh" : "-12vw"}`}
        />
        <Skill
          name="Web Design"
          x={`${width < 700 ? "25vh" : "32vw"}`}
          y={`${width < 700 ? "-5vh" : "-0vw"}`}
        />
        <Skill
          name="Wordpress"
          x={`${width < 700 ? "25vh" : "32vw"}`}
          y={`${width < 700 ? "-20vh" : "-10vw"}`}
        />
        <Skill
          name="Ruby"
          x={`${width < 700 ? "0vh" : "0vw"}`}
          y={`${width < 700 ? "-30vh" : "-20vw"}`}
        />
        <Skill
          name="Ruby On Rails"
          x={`${width < 700 ? "-25vh" : "-25vw"}`}
          y={`${width < 700 ? "28vh" : "18vw"}`}
        />
        <Skill
          name="Tailwind CSS"
          x={`${width < 700 ? "18vh" : "18vw"}`}
          y={`${width < 700 ? "28vh" : "18vw"}`}
        />
      </div>
    </div>
  );
}
