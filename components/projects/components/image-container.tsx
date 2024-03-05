import Image from "next/image";
import React from "react";
import Link from "next/link";
import CustomCursor from "@/components/custom-cursor";

interface ImageContainerProps {
  imageUrl: string;
  projectName: string;
  year: string;
  tags: string[];
  url: string;
}

const ImageContainer = ({
  imageUrl,
  projectName,
  year,
  tags,
  url,
}: ImageContainerProps) => {
  return (
    <div className="w-full flex flex-col md:gap-y-6 relative">
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
          <h1 className="text-xl lg:text-4xl font-bold">{projectName}</h1>
        </div>
        <div className="flex items-center gap-x-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-sm lg:text-2xl bg-[#3A3733] text-[#E2E2DD] px-2 py-1 rounded-md"
            >
              {tag}
            </p>
          ))}
          <p className="text-sm lg:text-2xl bg-[#81B29A] text-[#E2E2DD] px-2 py-1 rounded-md">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
