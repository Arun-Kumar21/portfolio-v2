import Image from "next/image";
import React from "react";
import Link from "next/link";
import CustomCursor from "@/components/custom-cursor";

interface fullWidthContainerProps {
  imageUrl: string;
  projectName: string;
  year: string;
  tags: string[];
  url: string;
}

const FullWidthContainer = ({
  imageUrl,
  projectName,
  year,
  tags,
  url,
}: fullWidthContainerProps) => {
  return (
    <div className="w-full h-full flex flex-col md:gap-y-12 relative">
      <CustomCursor>
        <Link
          href={url}
          target="_blank"
          className="w-full h-full relative cursor-none"
        >
          <Image
            src={imageUrl}
            alt="project"
            width={1920}
            height={1080}
            quality={100}
            className="hover:rounded-xl hover:scale-105 transition duration-500 ease-in-out object-cover"
          />
        </Link>
      </CustomCursor>

      <div className="relative p-2 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">{projectName}</h1>
        </div>
        <div className="flex items-center gap-x-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-3xl bg-[#3A3733] text-[#E2E2DD] px-2 py-1 rounded-md"
            >
              {tag}
            </p>
          ))}
          <p className="text-3xl bg-[#81B29A] text-[#E2E2DD] px-2 py-1 rounded-md">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullWidthContainer;
