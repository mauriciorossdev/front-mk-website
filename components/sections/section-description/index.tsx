"use client";
export interface SectionDescriptionProps {
    description: string;
}

export const SectionDescription = ({ description }: SectionDescriptionProps) => {
    return (
        <div className="flex flex-col items-center justify-center md:my-12 my-6 md:px-24 px-8 py-4 bg-indigo-100">
            <p className="text-2xl font-medium mb-4">{description}</p>
        </div>
    )
}

export default SectionDescription;