"use client";

import axios from "axios";
import SectionDescription, { SectionDescriptionProps } from "@/components/sections/section-description";
import SectionFeatures from "@/components/sections/section-features";
import SectionFooter from "@/components/sections/section-footer";
import SectionTitle, {
  SectionTitleProps,
} from "@/components/sections/section-title";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

export const Home = () => {
  const [SectionTitleData, setSectionTitleData] = useState({
    title: "",
    image: "",
  });
  const [SectionDescriptionData, setSectionDescriptionData] = useState<SectionDescriptionProps>({
    description: "",
  })
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
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, facilis impedit maxime facere voluptas consequatur labore, repudiandae in, magni cupiditate incidunt sit libero. Adipisci asperiores excepturi a aut commodi culpa!";

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
      url: "http://localhost:1337/api/section-hero?populate=*",
      headers: {
        Authorization:
          "Bearer 34fc07cce76cef62c4713c7e7032459989c9f03166506ebdf11e8b7e9f4397f719fca20391d1c9263aaac4c2d6ebc050211eec839d7639611b00e079ddc3fea870e2817a706e780988b82b22e273ccddffe7e6345493b44febb9f12c4c3e115deb947a9e0800232d8ccbadd7008caf0a8c34e799fb500ffa3be142a574d44714",
      },
    };

    await axios
      .request(config)
      .then((response) => {
        setSectionTitleData({
          title: response.data.data.attributes.title,
          image:
            "http://localhost:1337" +
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
      url: "http://localhost:1337/api/description",
      headers: {
        Authorization:
          "Bearer 34fc07cce76cef62c4713c7e7032459989c9f03166506ebdf11e8b7e9f4397f719fca20391d1c9263aaac4c2d6ebc050211eec839d7639611b00e079ddc3fea870e2817a706e780988b82b22e273ccddffe7e6345493b44febb9f12c4c3e115deb947a9e0800232d8ccbadd7008caf0a8c34e799fb500ffa3be142a574d44714",
      },
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setSectionDescriptionData({
          description: response.data.data.attributes.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
};

export default Home;
