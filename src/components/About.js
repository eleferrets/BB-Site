import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi! I'm Brian!
          </h1>
          <p className="mb-8 leading-relaxed">
            I am <strong>Brian Balthazar</strong> and I am a{" "}
            <strong> Full-stack Web Developer</strong>. I have done{" "}
            <strong> remote </strong>
            work for influential companies such as CodePath and iCIMS, and have
            collaborated with many amazing and talented people to create apps
            for consumers. I also make games on the side, and know a bit of
            Spanish and Haitian Creole.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              My Projects
            </a>
            <a
              href="./resume.pdf"
              className="ml-4 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./brian-b.jpg"
          />
        </div>
      </div>
    </section>
  );
}
