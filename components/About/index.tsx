import React, { useRef } from "react";
import local from "next/font/local";
import Link from "next/link";

const font = local({ src: "../../app/fonts/CabinetGrotesk-Variable.woff2" });

const About = () => {
  return (
    <div
      id="about"
      className="text-[#3A3733] bg-[#E2E2DD] dark:text-[#D1D1C7] w-full min-h-screen h-full dark:bg-[#0E0E0C]"
    >
      <div className="p-2 sm:p-4 lg:px-28 mx-auto flex flex-col md:flex-row gap-x-4">
        <div className="flex items-center justify-center md:items-start md:justify-start w-full my-12 md:my-0 md:w-1/2">
          <div className={font.className}>
            <h1 className="text-7xl lg:text-[8vw] font-bold">About Me.</h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center lg:mt-[25vh]">
          <h1 className="text-[#89897F] h-full text-3xl md:text-5xl">
            I am a full-stack developer with a passion for creating beautiful
            and functional websites.
          </h1>

          <h1 className="text-[#89897F] h-full text-3xl md:text-5xl mt-4">
            Currently pursuing a Computer Science degree at <br />
            <Link
              href="https://www.ipu.ac.in/"
              className="text-[#E07A5F] hover:underline"
              target="_blank"
            >
              Guru Gobind Singh Indraprastha University ( EDC ) <br />
            </Link>
            <span>Delhi , India</span>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
