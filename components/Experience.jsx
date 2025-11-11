import { motion, useScroll } from "framer-motion";

import Lilcon from './ui/Lilcon';
import Link from "next/link";
import React from "react";
import { useRef } from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between sm:items-start"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        {/* <p className="mt-3 font-medium w-full">{work}</p> */}
        <ul className="mt-3 font-medium w-full">{work}</ul>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-20 w-full text-center desk-sm:text-6xl xs:text-5xl max-w-5xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative desk-sm:w-[100%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between m1-4">
          <Details
            position="Founder / Vacation Rental Host"
            company="City Stays Melbourne"
            companyLink={"https://citystaysmelbourne.com"}
            time="2022-present"
            tags={["wordpress", "CSS", "Javascript"]}
            address="220 Spencer Street, Melbourne, vic, 3000"
            work={
              <div className="w-[120%]">
                As the founder of CityStays Melbourne, a small vacation rental
                business specialising in short to mid-stay accommodations in
                Melbourne CBD, I applied my technical experience to develop and
                customise a direct booking website using WordPress. This
                platform seamlessly integrates with a Property Management System
                (PMS) thats synchronized to my Airbnb calendar. Through my
                streamlined workflow, I have established a hands-off approach,
                having people in place to manage daily operations.
              </div>
            }
          />
          <Details
            position="Front-End Developer"
            company="Myer"
            companyLink={"https://www.myer.com.au/"}
            time="2022-2022"
            address="Melbourne, Vic, 3000"
            work={
              <ul className="list-disc ml-5 w-[120%]">
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality software solutions within specified timelines.
                </li>
                <li>
                  Collaborated with UX/UI designers to translate design concepts
                  into functional and visually appealing frontend components.
                </li>
                <li>
                  Developed and implemented responsive user interfaces using
                  React and Typescript.
                </li>
                <li>
                  Staying upto date with the latest trends, and incorporating
                  new frontend tech.
                </li>
                <li>
                  Participated in Agile development processes, contributing to
                  sprint planning, stand-ups, and retrospectives.
                </li>
              </ul>
            }
          />

          <Details
            position="Front-End Developer"
            company="Megaphone"
            companyLink={"https://megaphone.com.au/"}
            time="2021-2022"
            address="33-41 Balmain Street Cremorne VIC 3121"
            work={
              <ul className="list-disc ml-5 w-[120%]">
                <li>
                  Developed and maintained visually appealing, user-friendly
                  websites on e-commerce platforms, specializing in Shopify and
                  WordPress.
                </li>
                <li>
                  Implemented Conversion Rate Optimization (CRO) strategies to
                  enhance user engagement and increase conversion rates across
                  client websites.
                </li>
                <li>
                  Utilized HTML, CSS, and JavaScript to create custom solutions
                  that align with design specifications and client requirements.
                </li>
                <li>
                  Wrote custom code in Liquid (Shopify), PHP (WordPress), and
                  other relevant languages to customize and optimize website
                  functionalities.
                </li>
                <li>
                  Collaborated with developers, account managers, clients and
                  stakeholders on a regular basis, explaining complex concepts
                  in plain english.
                </li>
              </ul>
            }
          />

          <Details
            position="Technical Support & Data Entry"
            company="My Emergency Dr"
            companyLink={"https://www.myemergencydr.com/"}
            time="2020-2021"
            address="10 Bond Street, Sydney, NSW, 2000"
            work={
              <ul className="list-disc ml-5 w-[120%]">
                <li>
                  Provided technical support to users, resolving hardware and
                  software issues promptly to ensure seamless operations.
                </li>
                <li>
                  Responded to inquiries and issues related to My Emergency
                  Doctor&apos;s digital platforms, demonstrating a strong
                  understanding of the technology and offering effective
                  solutions..
                </li>
                <li>
                  Generated detailed reports and summaries from Doctors,
                  patients and emergency services for documentation purposes.
                </li>
                <li>
                  Communicated with emergency serveces such as Ambulance
                  Victoria and NSW Ambulance, organising triage services for
                  patients and doctors.
                </li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
}
