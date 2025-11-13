// import {FeaturedProject} from './components/ui/projects/ProjectCards'
import {FeaturedProject, Project} from '/components/ui/projects/ProjectCards.jsx'

import CozyTees from "../../../public/images/projects/cozy-landing.png";
import React from "react";
import codeBASED from "../../../public/images/projects/codeBASED.png"
import portfolio from "../../../public/images/dev-portfolio.png";
import project10 from '../../../public/images/projects/Hbnbv4.png'
import project11 from '../../../public/images/projects/techmeet.png'
import project2 from "../../../public/images/projects/itsAVibe.png";
import project3 from "../../../public/images/projects/cityStaysMelb.png";
import project5 from "../../../public/images/projects/workflows.png";
import project6 from "../../../public/images/projects/ecom-arb.png";
import project7 from "../../../public/images/projects/AlphahMock.png";
import project8 from '../../../public/images/projects/nextjsblog.png'
import project9 from '../../../public/images/projects/Learning-management-system.png'
import styles from './projects.module.css';

function PersonalProjects() {
  
  return (

    <div className={`grid grid-cols-12 gap-24 gap-y-32 desk-sm:gap-0 desk-sm:!grid-cols-none desk-sm:grid-cols-auto desk-sm:!flex-col desk-sm:justify-between`}>

      <div className="col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <FeaturedProject
          title={"Techmeet - Currently in Development"}
          img={project11}
          summary={
            "An AI powered tech event sourcing platform (Prototype) - Currently in Development."
          }
          link={"https://techmeet-production.up.railway.app/"}
          github={"https://github.com/Johnnsonkp/techmeet"}
          type={"Featured Project"}
        />
      </div>

      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"Hbnb_v4 - Vacation Rental Booking Website"}
          img={project10}
          summary={
            "An Airbnb style property booking website. Currently evolving into a data insights platform for analysing global Airbnb property trends."
          }
          link={"https://hbnbv4-production.up.railway.app/"}
          github={"https://github.com/Johnnsonkp/Hbnb_v4"}
          type={"Featured Project"}
        />
      </div>

      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"NextJS Blog"}
          img={project8}
          summary={
            "The Next.js Notion Blog is a modern, fast, and minimalistic blogging platform designed to document my programming journey. Built with Next.js and Notion as a headless CMS,"
          }
          link={"https://nextjs-notion-cms-six.vercel.app/"}
          github={"https://github.com/Johnnsonkp/"}
          type={"Project"}
        />
      </div>

      <div className="col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <FeaturedProject
          title={"QLearn.ai - AI-Powered Learning Management System - Currently in Development"}
          img={project9}
          summary={
            "A modern learning management system built with Ruby on Rails and React, featuring AI-powered quiz generation, personalized study tracking, and comprehensive analytics."
          }
          link={"https://lms-production-26b9.up.railway.app/"}
          github={"https://github.com/Johnnsonkp/quiz-lms-rails"}
          type={"Featured Project"}
        />
      </div>
      
      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"codeBASED"}
          img={codeBASED}
          summary={
            "A coding sandbox for developers! Take on unlimited coding challenges directly from your GitHub repositories, refine your skills, and master your craft—all in one place."
          }
          link={"https://codebased-production.up.railway.app/"}
          github={"https://github.com/Johnnsonkp/codeBASED"}
          type={"Featured Project"}
        />
      </div>

      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"Ecommerce Web Scraper [Still In Development]"}
          img={project6}
          summary={
            "A web scraping application, built using Ruby on Rails, leveraging the power of web scraping technology, the app extracts item listings from Gumtree marketplace. Users have the flexibility to apply custom price markups before publishing the listings onto Facebook Marketplace."
          }
          link={"https://fb-scraper-old-paper-2255.fly.dev/"}
          github={"https://github.com/Johnnsonkp/webscrape-dropshipper"}
          type={"Featured Project"}
        />
      </div>
      
      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"City Stays Melbourne "}
          img={project3}
          summary={
            "A direct booking website for a vacation rental business. Built using wordpress with personal customistions. Connected to a PMS, it enables direct bookings while synchronizing effortlessly with my OTA calendar (Airbnb, VRBO), preventing any potential double bookings and conflicts. "
          }
          link={"https://citystaysmelbourne.com"}
          github={"/"}
          type={"Direct Booking Website"}
        />
      </div>
    
      <div className="col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <FeaturedProject
          title={"Its A Vibe"}
          img={project2}
          summary={
            "Vibe is a mixture of a playlist wizard, a psychologist and that one friend that DJs at all your parties. You tell it how you feel and what you fancy and it makes you a perfect playlist to Vibe to!."
          }
          link={"https://its-a-vibe.netlify.app/"}
          github={"https://github.com/its-a-vibe/vibe"}
          type={"Hackerton Project"}
        />
      </div>
      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"Nextjs Portfolio Website"}
          img={portfolio}
          summary={
            "A dynamic and engaging portfolio website built with Next.js, styled with Tailwind CSS, and animated using Framer Motion. This project offers a modern and responsive platform to showcase my CV and projects, featuring smooth animations, sleek design, and an intuitive user experience. "
          }
          link={"https://www.chinonso.io/"}
          github={"https://github.com/Johnnsonkp/Nextjs-website"}
          type={"Portfolio Website"}
        />
      </div>
      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
        <Project
          title={"CozyTees"}
          img={CozyTees}
          summary={
            "Cozy tees is a two-sided-marketplace application on rails that facilites the buying and selling of T-shirts and sporting jerseys. **Unfortunatly heroku the (hosting platform) stopped their free tier and took down the database. Currently working to get it back up."
          }
          link={"https://cozy-tees-app.herokuapp.com/"}
          github={"https://github.com/Johnnsonkp/cozy_tees"}
          type={"Two Way Marketplace App"}
        />
      </div>
      <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 sm:mx-auto">
        <Project
          title={"Alphah Mockup"}
          img={project7}
          summary={
            "An E-commerce mock up website built with react using vanilla CSS. This project showcases a responsive and user-friendly interface, complete with essential e-commerce functionalities such as product listings, detailed product pages and a shopping cart." 
          }
          link={"https://alphahmockup.netlify.app/"}
          github={"https://github.com/Johnnsonkp/alphaH_mockup"}
          type={"E-commerce Website mockup"}
        />
      </div>
    </div>
  );
}

export default PersonalProjects;