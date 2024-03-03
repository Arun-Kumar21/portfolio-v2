import React from "react";
import local from "next/font/local";
import Star from "../icons/star";
import Rhombus from "../icons/rhombus";

const font = local({ src: "../../app/fonts/CabinetGrotesk-Variable.woff2" });

const Services = () => {
  return (
    <div className="text-[#3A3733] bg-[#E2E2DD] dark:text-[#D1D1C7] w-full min-h-screen h-full dark:bg-[#0E0E0C]">
      <div className="lg:px-28 px-2">
        <div className="md:grid grid-cols-2 py-4">
          <div className={font.className && "md:col-span-1"}>
            <h1 className="text-7xl lg:text-[8vw] font-bold px-4 md:px-0">
              What I Do.
            </h1>
          </div>
        </div>
        <hr className="border-[#3A3733] dark:border-[#D1D1C7]" />

        <div className="flex flex-col gap-y-8 md:gap-y-0 p-4 md:flex-row md:gap-x-12 lg:gap-x-24 items-start justify-between py-16">
          <div className="md:w-1/2 flex flex-col p-2 gap-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold dark:text-[#BDBDB0] text-black flex items-center">
              <div className="-mb-4 md:p-2">
                <Star />
              </div>
              My Expertise
            </h1>
            <p className="text-2xl px-4 md:px-0">
              I specialize in building custom websites from the ground up using
              clean, efficient code. This ensures optimal performance,
              scalability, and accessibility for your website.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col text-start px-4 md:px-0">
            <h1 className="text-[#6e6e65] text-5xl font-semibold">
              Web Development
            </h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">
              UI/UX Design
            </h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">
              Web Design
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 md:gap-y-0 p-4 md:p-0 md:flex-row md:gap-x-12 lg:gap-x-24 items-start justify-between py-16">
          <div className="md:w-1/2 flex flex-col gap-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold dark:text-[#BDBDB0] flex items-center text-black">
              <div className="p-2">
                <Rhombus />
              </div>
              My Development Stack
            </h1>
            <p className="text-2xl px-4 md:px-0">
              My diverse tech stack adapts to any project, with a strong
              foundation and continuous learning ensuring exceptional results.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col text-start px-4 md:px-0">
            <h1 className="text-[#6e6e65] text-5xl font-semibold">NextJs</h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">NodeJs</h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">ReactJs</h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">
              Prisma ORM
            </h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">
              TailwindCss
            </h1>
            <h1 className="text-[#6e6e65] text-5xl font-semibold">
              Framer Motion
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
