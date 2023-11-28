import Image from "next/image";

export interface FeatureProps {
  title:string,
  subtitle:string,
  image:string,
}

export interface SectionFeaturesProps {
  features: Array<FeatureProps>;
};

export const SectionFeatures = (props: SectionFeaturesProps) => {
  return (
    <section className="md:flex justify-between w-full md:my-12 my-6 md:px-24 px-8 w-[80%]">
      {props.features.map((feature, index) => {
        return (
          <div key={index} className="my-8 text-center w-[30%]">
            
            <div className="w-full relative h-60">
              <Image
                src={feature.image}
                alt={feature.title}
                className=" rounded-2xl"
                fill={true}
                style={{ objectFit: "cover",objectPosition:"50% 50%" }}
              />
            </div>
            <p className="my-4 md:text-lg text-2xl font-medium text-center">{feature.title}</p>
            <div className="flex justify-center"><p className="w-[150px] text-sm text-center">{feature.subtitle}</p></div>
          </div>
        );
      })}
    </section>
  );
};

export default SectionFeatures;
