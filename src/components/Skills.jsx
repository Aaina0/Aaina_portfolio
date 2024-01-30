import React from "react";
import Image from "next/image";
import  express from "@/assets/express.png"
import html5 from "@/assets/html5.png"
import css from "@/assets/css.png"
import js from "@/assets/js.png"
import react from "@/assets/react.png"
import Next from "@/assets/Next.png"
import mongoDB from "@/assets/mongoDB.png"
import node from "@/assets/node.png"
import tailwind from "@/assets/tailwind.png"
import mern from "@/assets/mern.png"


function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#7A77B9] font-bold">
          Skills
        </p>
        <h2 className="py-4 text-[#EA7186]">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={html5}
                  alt="HTML5"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">HTML5</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={css}
                  alt="css"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">CSS3</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={js}
                  alt="js"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={react}
                  alt="react"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">React JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Next}
                  alt="next"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">Next JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwind}
                  alt="tailwind"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={mern}
                  alt="mern"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600"> MERN Stack</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={mongoDB}
                  alt="mongoDB"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={node}
                  alt="node"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">Node JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={express}
                  alt="express"
                  width={65}
                  height={65}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-600">Express JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
