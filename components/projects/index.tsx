"use client";

import React from "react";
import local from "next/font/local";
import ImageContainer from "./components/image-container";

const font = local({ src: "../../app/fonts/CabinetGrotesk-Variable.woff2" });

const Projects = () => {
  const headingVariant = {
    initial: {
      y: 400,
    },
    animate: (i: number[]) => ({
      y: 0,
      transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }),
  };

  return (
    <div
      id="projects"
      className="text-[#3A3733] bg-[#E2E2DD] dark:text-[#D1D1C7] w-full min-h-screen h-full dark:bg-[#0E0E0C] pb-32"
    >
      <div className="p-2 sm:p-4 lg:px-28 mx-auto flex flex-col gap-x-4">
        <div className="flex items-center justify-center md:items-start md:justify-start w-full my-12 md:my-0 md:w-1/2">
          <div className={font.className}>
            <h1 className="text-7xl lg:text-[8vw] font-bold">Projects.</h1>
          </div>
        </div>

        <div className="min-h-screen h-full w-full py-12 grid grid-cols-12 gap-y-12 p-4 gap-x-4 lg:gap-24">
          <div className="col-span-12">
            <ImageContainer
              imageUrl="/images/moon-ecommerce-mockup.png"
              projectName="Moon E-commerce"
              year="2024"
              tags={["NextJs", "MongoDB"]}
              url="https://moon-ecommerce-two.vercel.app/"
            />
          </div>

          <div className="col-span-12 h-full md:col-span-6">
            <ImageContainer
              imageUrl="/images/moon-admin.png"
              projectName="Admin Dashboard"
              year="2024"
              tags={["NextJs", "MongoDB"]}
              url="https://ecommerce-admin-nu-pied.vercel.app/"
            />
          </div>

          <div className="col-span-12 h-full md:col-span-6">
            <ImageContainer
              imageUrl="/images/christmas-mockup.png"
              projectName="Merry Christmas"
              year="2023"
              tags={["HTML", "CSS"]}
              url="https://arun-kumar21.github.io/responsive_Christmas_website/"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <ImageContainer
              imageUrl="/images/animix-mockup.png"
              projectName="Animix Clone"
              year="2023"
              tags={["HTML", "CSS"]}
              url="https://arun-kumar21.github.io/Animix-Clone/"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <ImageContainer
              imageUrl="/images/eurecah-mockup.png"
              projectName="Eurach Clone"
              year="2024"
              tags={["NextJs", "Framer"]}
              url="https://eurecah-minimal.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
