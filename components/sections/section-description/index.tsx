
type SectionDescriptionProps = {
    description: string;
}

export const SectionDescription = ({ description }: SectionDescriptionProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold mb-4">{description}</p>
        </div>
    )
}

export default SectionDescription;