
type SectionDescriptionProps = {
    description: string;
}

export const SectionDescription = ({ description }: SectionDescriptionProps) => {
    return (
        <div className="flex flex-col items-center justify-center md:my-12 my-6">
            <p className="text-2xl font-medium mb-4">{description}</p>
        </div>
    )
}

export default SectionDescription;