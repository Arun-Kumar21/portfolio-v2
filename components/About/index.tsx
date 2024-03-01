import React from "react";
import local from "next/font/local";

const font = local({ src: "../../app/fonts/CabinetGrotesk-Variable.woff2" });

const About = () => {
  return (
    <div className="text-[#3A3733] bg-[#E2E2DD] dark:text-[#D1D1C7] w-full h-screen dark:bg-[#0E0E0C]">
      <div className="p-2 sm:p-4 lg:px-28 mx-auto flex md:flex-row items-center gap-x-4">
        <div className="flex items-start justify-start w-1/2">
          <div className={font.className}>
            <h1 className="text-[8vw] font-bold">About Me</h1>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <h1 className="text-[#89897F]"></h1>
        </div>
      </div>
    </div>
  );
};

export default About;
