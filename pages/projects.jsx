import AgencyProjects from "../components/ui/projects/AgencyProjects";
import AnimatedText from "../components/ui/AnimatedText";
import CustomTab from "../components/ui/tabs/CustomTabs";
import Head from "next/head";
import Layout from "../components/ui/Layout";
import PersonalProjects from "../components/ui/projects/PersonalProjects";
import { useState } from "react";

function Projects() {
  const [selectedTab, setSelectedTab] = useState("/projects");
  return (
    <>
      <Head>
        <title>Chinonso.io | Projects Page</title>
        <meta
          name="Projects"
          content="Some of My Dev projects using HTML, CSS, Javascript, React, Ruby on Rails, Shopify, Wordpress, Nodejs, Typescript and many more"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-x-hidden desk-sm:w-[100vw] desk-sm:px-5  mx-auto">
        <Layout className="!pt-10 desk-sm:!px-0 max-w-7xl">
          <AnimatedText
            text="Projects"
            className="mb-10"
          />

          <div className="text-center m-auto flex justify-center">
            <CustomTab setSelectedTab={setSelectedTab} />
          </div>

          {selectedTab === "/projects" && <PersonalProjects />}
          {selectedTab === "/agency" && <AgencyProjects />}
        </Layout>
      </main>
    </>
  );
}

export default Projects;