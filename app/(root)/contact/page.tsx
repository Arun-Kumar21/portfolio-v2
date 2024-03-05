"use client";
import React , {useState} from "react";

import Link from "next/link";
import local from "next/font/local";

import Magnetic from "@/components/magnetic-button";
import toast from "react-hot-toast";

const font = local({ src: "./../../fonts/CabinetGrotesk-Variable.woff2" });

const ContactPage = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f6447183-b9de-4b25-931e-2188fad6d457",
        name: name,
        email: email,
        message: message,
      }),
    });

    const result = await response.json();
    console.log(result);

    if (result.error) {
      toast.error("Something Wrong Went");
      console.log(result.error);
    }

    if (result.success) {
      toast.success("Message sent successfully");
    }
  }

  return (
    <div className="w-full flex flex-col bg-[#E2E2DD] dark:bg-[#0E0E0C] dark:text-[#D1D1C7] text-[#3A3733] h-full min-h-[calc(100vh-4rem)] p-2 lg:px-16 md:px-4">
      <div className="md:w-[60%] my-12">
        <div className={font.className}>
          <h1 className="lg:text-[5vw] text-5xl font-bold leading-[1]">
            Let{"'"}s connect to explore how I can assist you.
          </h1>
        </div>
      </div>

      <div className="md:grid grid-cols-12 gap-x-12">
        <div className="md:col-span-6 flex flex-col justify-center gap-y-12">
          <form className="form flex flex-col gap-y-12 pb-12" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-xl">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                className="input w-full rounded-md p-2 mt-2 text-lg border-2 border-[#BFBFB1] bg-transparent text-[#3A3733]"
                required
                onChange={handleChange}
                placeholder="Mitsuri Kanroji"
                autoComplete="false"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="Email" className="text-xl">
                Your Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                className="input w-full rounded-md p-2 mt-2 text-lg border-2 border-[#BFBFB1] bg-transparent text-[#3A3733]"
                required
                onChange={handleChange}
                placeholder="Mitsuri@outlook.com"
                autoComplete="false"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="message" className="text-xl">
                Your Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                className="input w-full rounded-md p-2 mt-2 text-lg border-2 border-[#BFBFB1] bg-transparent text-[#3A3733]"
                required
                onChange={handleChange}
                rows={5}
                placeholder="I would like to discuss..."
                autoComplete="false"
              />
            </div>

            <button
              className="w-32 bg-[#BFBFB1] p-3 rounded-md hover:bg-[#BFBFA1] hover:scale-105 transition"
              type="submit"
            >
              Let{"'"}s Do It
            </button>
          </form>
        </div>

        <div className="pb-12 md:pb-0 md:col-span-4">
          <h1 className="text-lg md:text-2xl font-semibold uppercase">
            socials
          </h1>

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

          <div className="mt-4">
            <h1 className="text-lg md:text-2xl font-semibold uppercase">
              Email
            </h1>
            <Link
              href="mailTo:ak3930566@gmail.com"
              className="text-xl hover:underline"
            >
              ak3930566@gmail.com
            </Link>
          </div>
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

export default ContactPage;
