"use client";
import Image from "next/image";
import styles from "./section-title.module.scss";
import { myImageLoader } from "@/utils/loader";

// import myImageLoader from "@/utils/loader";

export interface SectionTitleProps {
  title: string;
  subtitle:string;
  image: string;
}


export const SectionTitle = ({ title, image, subtitle }: SectionTitleProps) => {
  return (
    <div className={`flex items-center justify-around w-full mb-8 ${styles.sectionTitle}`}>
      <div className="w-[40%]">
        <h1 className="text-4xl font-bold md:mb-12 mb-8 text-indigo-950">
          {title}
        </h1>
        <p dangerouslySetInnerHTML={{__html:subtitle}}></p>
      </div>
      <div className="w-[40%] h-72 relative">
        <Image
          loader={myImageLoader}
          src={image}
          alt="Section Title"
          fill={true}
          style={{ objectFit: "cover" }}
          className="w-32 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SectionTitle;
