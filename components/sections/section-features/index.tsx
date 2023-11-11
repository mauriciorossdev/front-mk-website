import Image from "next/image";

export interface SectionFeaturesProps {
  features: Array<{ title: string; image: string }>;
};

export const SectionFeatures = (props: SectionFeaturesProps) => {
  return (
    <div className="md:flex justify-between w-full md:my-12 my-6 md:px-24 px-8">
      {props.features.map((feature, index) => {
        return (
          <div key={index} className="my-8">
            <p className="my-4 md:text-lg text-2xl font-semibold text-center">{feature.title}</p>
            <div className="w-full relative h-60">
              <Image
                src={feature.image}
                alt={feature.title}
                className=" rounded-2xl"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionFeatures;
