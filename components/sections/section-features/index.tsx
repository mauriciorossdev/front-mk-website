import Image from "next/image";

type SectionFeaturesProps = {
    features: Array<{title:string, image:string}>;
}

export const SectionFeatures = (props:SectionFeaturesProps) => {
    return (
        <div className="flex justify-between w-full">
            {
                props.features.map((feature, index) => {
                    return (
                        <div key={index}>
                            {feature.title}
                            <Image src={feature.image} alt={feature.title}  width={100} height={100}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SectionFeatures;