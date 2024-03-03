import Image from "next/image";
import React from "react";

interface BigContainerProps {
  imageUrl: string;
  projectName: string;
  year: string;
  tags: string[];
}

const BigContainer = ({
  imageUrl,
  projectName,
  year,
  tags,
}: BigContainerProps) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full relative">
        <Image
          src={imageUrl}
          alt="project"
          width={800}
          height={800}
          className="rounded-xl  w-[50vw] h-[45vw]"
        />
      </div>

      <div className="relative p-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{projectName}</h1>
          <p className="text-sm">{year}</p>
        </div>
        <div className="flex items-center gap-x-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-xs bg-[#3A3733] text-[#E2E2DD] px-2 py-1 rounded-md"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigContainer;
