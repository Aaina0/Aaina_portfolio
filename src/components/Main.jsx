// pages/About.js
import { IoIosPerson } from "react-icons/io";
import Link from "next/link";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React from "react";

const Main = () => (
  <div id="home" className="w-full h-screen text-center">
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
        <p className="uppercase text-sm tracking-widest text-gray-500">
          LET'S BUILD SOMETHING TOGETHER
        </p>
        <h1>
          <span className="text-[#7A77B9]">Hi,</span> I'm{" "}
          <span className="text-[#F2C76E]">Aaina</span>
        </h1>
        <h2 className="py-4 text-[#EA7186]">
          I AM FULL STACK{" "}
          <span className="text-[#7A77B9]">WEBSITE DEVELOPER &rsquo;</span>
        </h2>
        <p className="py-4 text-gray-600 max-w-[70%] m-auto text-xs">
          "Experienced Website Developer proficient in MERN Stack (MongoDB,
          Express.js, Node.js) with expertise in JavaScript, React.js, and
          Next.js. Specializing in crafting modern web solutions, I leverage my
          skills to create dynamic and versatile websites. Additionally, I am
          adept at utilizing Tailwind CSS for a polished and responsive user
          interface."
        </p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <a
            href="https://www.linkedin.com/in/aina-najaf-developer/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
              <FaLinkedin size={25} style={{ color: "#EA7186" }} />
            </div>
          </a>
          <a href="https://github.com/Aaina0" target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
              <FaGithubAlt size={25} style={{ color: "#F2C76E" }} />
            </div>
          </a>
          <Link href="/#contact">
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
              <MdEmail size={25} style={{ color: "#BD9DEA" }} />
            </div>
          </Link>
          <Link href="/#contact">
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
              <IoIosPerson size={25} style={{ color: "#7A77B9" }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
