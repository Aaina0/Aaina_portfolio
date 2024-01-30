import React from "react";
import Image from "next/image";
import image2 from "@/assets/image2.jpg"

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#7A77B9] font-bold">
            About
          </p>
          <h2 className="py-4 text-[#EA7186]">WHO I AM</h2>
          <p className="py-4 text-gray-500 text-sm">
            I am a versatile website developer with a strong focus on the{" "}
            <span className="text-[#7A77B9]">MERN stack, &rsquo;</span>
            encompassing{" "}
            <span className="text-[#BD9DEA]">
              MongoDB, Express.js, Node.js,
            </span>{" "}
            and proficient in crafting dynamic and robust web solutions. My
            expertise lies in
            <span className="text-[#EA7186]">JavaScript,</span> and I excel in
            building interactive and scalable user interfaces using{" "}
            <span className="text-[#7A77B9]">React.js and Next.js</span>. With a
            keen eye for modern design, I leverage{" "}
            <span className="text-[#BD9DEA]">Tailwind CSS</span> to create
            visually appealing and responsive websites that align with the
            latest industry standards.
          </p>
          <p className="py-4 text-gray-500 text-sm">
            Driven by a passion for innovation, I bring a wealth of experience
            in web development to the table. Whether it's architecting <br />
            <span className="text-[#F2C76E]">
              databases, developing server-side logic, or crafting seamless
              front-end experiences,
            </span>
            I am dedicated to delivering solutions that not only meet but exceed
            client expectations. My commitment to staying abreast of emerging
            technologies ensures that my work is always at the forefront of the
            rapidly evolving web development landscape. Explore my portfolio to
            witness a fusion of skill, creativity, and a commitment to building
            cutting-edge web solutions.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={image2}
            alt="img"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
