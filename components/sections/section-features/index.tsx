import Image from "next/image";

type SectionFeaturesProps = {
  features: Array<{ title: string; image: string }>;
};

export const SectionFeatures = (props: SectionFeaturesProps) => {
  return (
    <div className="md:flex justify-between w-full md:my-12 my-6">
      {props.features.map((feature, index) => {
        return (
          <div key={index} className="my-8">
            <p className="my-4 text-lg font-semibold text-center">{feature.title}</p>
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
