import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import website from "../assets/website.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website3.png";
import website4 from "../assets/website4.png";
import website5 from "../assets/website5.png";
import website6 from "../assets/website6.png";
// import metaverse from "../projects/metaverse"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#7A77B9] font-bold">
          Projects
        </p>
        <h2 className="py-4 text-[#EA7186]">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Metaverse"
            backgroundImg={website}
            tech="React JS & Tailwind"
          />
          <ProjectItem
            title="Panaverse"
            backgroundImg={website2}
            tech="Next JS & Tailwind"
          />
          <ProjectItem
            title="Clothing Store"
            backgroundImg={website3}
            tech="Next JS & Tailwind"
          />
          <ProjectItem
            title="News Flow"
            backgroundImg={website4}
            tech="Mongo DB, Express JS, Node JS & React JS"
          />
          <ProjectItem
            title="Auth App"
            backgroundImg={website5}
            tech="Mongo DB, Express JS, Node JS & React JS"
          />
          <ProjectItem
            title="Daily News"
            backgroundImg={website6}
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
