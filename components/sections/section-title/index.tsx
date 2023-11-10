

type SectionTitleProps = {
    title: string;
    image: string;
}

export const SectionTitle = ({ title, image }: SectionTitleProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <div className="w-16 h-1 bg-black mb-4"></div>
            <img src={image} alt="Section Title" className="w-32" />
        </div>
    )
}

export default SectionTitle;