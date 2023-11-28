import ButtonLink from "@/components/atomos/button-link/button-link";
import { myImageLoader } from "@/utils/loader";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export interface CardPetProps {
  imagen: string;
  id: string;
  title: string;
  subtitle: string;
  button: {
    label?: string;
    url: string;
  };
}

export const CardPet = (props: CardPetProps) => {
  return (
    <div className="">
      <div className="relative min-w-[200px] h-[300px]">
        <Image
          loader={myImageLoader}
          alt={props.title}
          src={props.imagen}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        ></Image>
      </div>
      <div className="flex justify-between py-4">
        <div>
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <p className="font-light">{props.subtitle}</p>
        </div>
        <ButtonLink url={props.button.url} label={props.button.label}>
          <ChevronRightIcon width={32} height={32}></ChevronRightIcon>
        </ButtonLink>
      </div>
    </div>
  );
};

export default CardPet;
