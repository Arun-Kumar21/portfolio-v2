import React from "react";
import local from "next/font/local";
import ImageContainer from "./components/image-container";

const font = local({ src: "../../app/fonts/CabinetGrotesk-Variable.woff2" });

const Projects = () => {
  return (
    <div className="text-[#3A3733] bg-[#E2E2DD] dark:text-[#D1D1C7] w-full min-h-screen h-full dark:bg-[#0E0E0C]">
      <div className="p-2 sm:p-4 lg:px-28 mx-auto flex flex-col gap-x-4">
        <div className="flex items-center justify-center md:items-start md:justify-start w-full my-12 md:my-0 md:w-1/2">
          <div className={font.className}>
            <h1 className="text-7xl lg:text-[8vw] font-bold">Projects.</h1>
          </div>
        </div>

        <div className="min-h-screen w-full py-12 grid grid-cols-12 md:gap-24">
          <div className="col-span-12">
            <ImageContainer
              imageUrl="/images/moon-ecommerce-mockup.png"
              projectName="Moon E-commerce"
              year="2024"
              tags={["NextJs", "MongoDB"]}
              url="https://moon-ecommerce-two.vercel.app/"
            />
          </div>

          <div className="col-span-6 h-full">
            <ImageContainer
              imageUrl="/images/moon-admin.png"
              projectName="Admin Dashboard"
              year="2024"
              tags={["NextJs", "MongoDB"]}
              url="https://ecommerce-admin-nu-pied.vercel.app/"
            />
          </div>

          <div className="col-span-6 h-full">
            <ImageContainer
              imageUrl="/images/eurecah-mockup.png"
              projectName="Eurach Clone"
              year="2024"
              tags={["NextJs", "Framer Motion"]}
              url="https://ecommerce-admin-nu-pied.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
