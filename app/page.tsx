"use client";

import axios from "axios";
import SectionDescription, {
  SectionDescriptionProps,
} from "@/components/sections/section-description";
import SectionFeatures from "@/components/sections/section-features";
import SectionFooter from "@/components/sections/section-footer";
import SectionTitle from "@/components/sections/section-title";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [SectionTitleData, setSectionTitleData] = useState({
    title: "",
    image: "",
  });
  const [SectionDescriptionData, setSectionDescriptionData] =
    useState<SectionDescriptionProps>({
      description: "",
    });
  const features = [
    {
      title: "Adopcion de perros",
      image: "/feature-1.jpg",
    },
    {
      title: "Adopcion de gatos",
      image: "/feature-2.jpg",
    },
    {
      title: "Opta por la adopcion",
      image: "/feature-3.jpg",
    },
  ];

  const footer = {
    links: [
      { title: "Instagram", url: "#" },
      { title: "Linkedin", url: "#" },
    ],
    button: { label: "Contact Us", url: "/contact-us" },
  };

  const getTitle = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/section-hero?populate=*`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    };

    await axios
      .request(config)
      .then((response) => {
        setSectionTitleData({
          title: response.data.data.attributes.title,
          image:
            `${process.env.NEXT_PUBLIC_STRAPI_URL}` +
            response.data.data.attributes.image.data.attributes.url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDescriptions = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/description`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    };

    await axios
      .request(config)
      .then((response) => {
        setSectionDescriptionData({
          description: response.data.data.attributes.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTitle();
    getDescriptions();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-24 pt-8 ">
      <SectionTitle
        title={SectionTitleData.title}
        image={SectionTitleData.image}
      />
      <SectionDescription description={SectionDescriptionData.description} />
      <SectionFeatures features={features} />
      <SectionFooter links={footer.links} button={footer.button} />
    </main>
  );
}
