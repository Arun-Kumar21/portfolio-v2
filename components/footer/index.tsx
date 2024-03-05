"use client"
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Button from "../button";
import Magnetic from "../magnetic-button";

const font = localFont({
  src: "../../app/fonts/CabinetGrotesk-Variable.woff2",
});

const Footer = () => {
  return (
    <div className="text-[#3A3733] bg-[#E2E2DD] dark:text-[#D1D1C7] w-full flex flex-col items-center justify-between min-h-screen h-full dark:bg-[#0E0E0C] relative overflow-x-hidden">
      <div className="w-full min-h-[40vh] text-center pt-[5vh]">
        <div className={font.className}>
          <p className="md:text-3xl font-[800]">Have an Idea?</p>
          <h1 className="text-5xl lg:text-[8vw] font-[800] leading-[1] my-6 uppercase">
            Interested in working together?
          </h1>

          <p className="md:text-3xl">Drop me an email:</p>
          <Link
            href="mailto:ak3930566@gmail.com"
            className="md:text-3xl hover:underline"
          >
            ak3930566@gmail.com
          </Link>
        </div>
      </div>

      <div className="w-full grid-cols-12 gap-x-6 h-full grid px-4 md:px-12 py-8">
        <div className="col-span-5">
          <h1 className="text-lg md:text-2xl font-semibold uppercase">Navigation</h1>
          <hr className="border-[#a5a59a]" />

          <ul className="flex text-start flex-col md:text-xl py-2 gap-y-2 font-medium">
            <li>
              <Link
                href="/#home"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-4">
          <h1 className="text-lg md:text-2xl font-semibold uppercase">socials</h1>
          <hr className="border-[#a5a59a]" />

          <ul className="flex text-start flex-col md:text-xl py-2 gap-y-2 font-medium">
            <li>
              <Link
                href="https://www.linkedin.com/in/arun-kumar-8228a0278/"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Arun-Kumar21"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/mearun_kumar_/"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex items-center justify-between p-4 md:p-8 md:px-12">
        <h1 className="font-bold text-2xl md:text-[4rem] leading-[1]">
          &copy; {new Date().getFullYear()}
          <br />
          Arun Kumar
        </h1>

        <div className="flex flex-col">
          <h1 className="font-semibold text-xl md:text-3xl">Local Time</h1>
          <p className="font-semibold text-md md:text-xl text-neutral-500">
            {new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            UTC +5:30
          </p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Magnetic>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#81B29A" />
              <path
                d="M29.0001 44.9864L29.0098 45.9864L31.0096 46.0135L30.9999 45.0136L29.0001 44.9864ZM30.7031 14.2807C30.6977 13.7284 30.2457 13.2747 29.6935 13.2672C29.1413 13.2597 28.6979 13.7013 28.7033 14.2536L30.7031 14.2807ZM30.9999 45.0136L30.7031 14.2807L28.7033 14.2536L29.0001 44.9864L30.9999 45.0136Z"
                fill="black"
              />
              <path
                d="M30.4353 14.9473C30.8036 14.5357 30.7694 13.9027 30.3588 13.5333C29.9482 13.1639 29.3168 13.1981 28.9485 13.6096L30.4353 14.9473ZM28.9485 13.6096L20.5083 23.0405L21.9952 24.3781L30.4353 14.9473L28.9485 13.6096Z"
                fill="black"
              />
              <path
                d="M30.4596 13.5519C30.0801 13.1507 29.4468 13.1326 29.0451 13.5116C28.6434 13.8906 28.6254 14.5231 29.0049 14.9244L30.4596 13.5519ZM39.3597 22.9622L30.4596 13.5519L29.0049 14.9244L37.905 24.3347L39.3597 22.9622Z"
                fill="black"
              />
            </svg>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Footer;
