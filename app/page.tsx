"use client";

import axios from "axios";
import SectionDescription, {
  SectionDescriptionProps,
} from "@/components/sections/section-description";
import SectionFeatures from "@/components/sections/section-features";
import SectionFooter from "@/components/sections/section-footer";
import SectionTitle from "@/components/sections/section-title";
import { Suspense, useEffect, useState } from "react";
import CardPet, {
  CardPetProps,
} from "@/components/moleculas/card-pet/card-pet";

export default function Home() {
  const [SectionTitleData, setSectionTitleData] = useState({
    title: "Adopt Me",
    subtitle:
      "En <strong>Adopt Me</strong>, unimos corazones. Ofrecemos una nueva oportunidad a perros y gatos rescatados para encontrar un hogar cálido y amoroso. Cada adopción es un paso hacia un mundo mejor para ellos y una vida compartida llena de alegría para ti. ¡Elige adoptar y cambia dos vidas para siempre!",
    image: "/perro-gato-title.png",
  });
  const [SectionDescriptionData, setSectionDescriptionData] =
    useState<SectionDescriptionProps>({
      description: "",
    });

  const Pets: CardPetProps[] = [
    {
      title: "Perro 1",
      subtitle: "Edad : 2 años",
      imagen: "/feature-1.jpg",
      id: "1",
      button: {
       
        url: "/adopcion",
      },
    },{
      title: "Perro 1",
      subtitle: "Edad : 2 años",
      imagen: "/feature-1.jpg",
      id: "1",
      button: {
       
        url: "/adopcion",
      },
    },{
      title: "Perro 1",
      subtitle: "Edad : 2 años",
      imagen: "/feature-1.jpg",
      id: "1",
      button: {
       
        url: "/adopcion",
      },
    },{
      title: "Perro 1",
      subtitle: "Edad : 2 años",
      imagen: "/feature-1.jpg",
      id: "1",
      button: {
       
        url: "/adopcion",
      },
    },
  ];
  const features = [
    {
      title: "Adopcion de perros",
      subtitle: "Los perritos más tiernos y juguetones te esperan",
      image: "/feature-1.jpg",
    },
    {
      title: "Adopcion de gatos",
      subtitle: "Gatitos que dominaran el mundo",
      image: "/feature-2.jpg",
    },
    {
      title: "Opta por la adopcion",
      subtitle: "Adopta un perro o gato y cambia dos vidas para siempre",
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
        setSectionTitleData({
          title: "Esta es un titulo de prueba, por favor cambialo",
          image: "/perro-gato-title.png",
        });
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
        setSectionDescriptionData({
          description: "Esta es una descripción de prueba, por favor cambiala",
        });
      });
  };

  useEffect(() => {
    // getTitle();
    // getDescriptions();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-24 pt-8 ">
      <SectionTitle
        title={SectionTitleData.title}
        subtitle={SectionTitleData.subtitle}
        image={SectionTitleData.image}
      />
      <section className="w-[80%]">
        <div className="md:flex md:flex-row md:justify-between">
          {Pets.map((pet, index) => (
            <CardPet
              key={index}
              title={pet.title}
              subtitle={pet.subtitle}
              imagen={pet.imagen}
              id={pet.id}
              button={pet.button}
            />
          ))}
        </div>
      </section>

      {/* <SectionDescription description={SectionDescriptionData.description} /> */}
      <SectionFeatures features={features} />
      <SectionFooter links={footer.links} button={footer.button} />
    </main>
  );
}
