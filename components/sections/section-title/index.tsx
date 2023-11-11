"use client";
import Image from "next/image";

// import myImageLoader from "@/utils/loader";

export interface SectionTitleProps {
  title: string;
  image: string;
}

const myImageLoader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const SectionTitle = ({ title, image }: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      <h2 className="text-4xl font-bold md:mb-12 mb-8 text-indigo-950">{title}</h2>
      <div className="w-full h-72 relative">
        <Image
          loader={myImageLoader}
          src={image}
          alt="Section Title"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "0 15%" }}
          className="w-32"
        />
      </div>
    </div>
  );
};

export default SectionTitle;
