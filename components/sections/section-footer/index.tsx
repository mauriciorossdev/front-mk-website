import Link from "next/link";

export type SectionFooterProps = {
  links: Array<{
    title: string;
    url: string;
  }>;
  button: {
    label: string;
    url: string;
  };
};

export const SectionFooter = (props: SectionFooterProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12">
      <div className="flex justify-around w-full my-8">
        {props.links.map((link, index) => {
          return (
            <Link
              href={link.url}
              key={index}
              className="min-w-[150px] p-2 px-8 bg-lime-700 text-white text-center rounded-md"
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className="my-8 w-[80%] text-center">
        <Link href={props.button.url} className="mt-8 md:px-48 px-12 py-4 bg-sky-950 text-white text-center font-bold text-2xl">{props.button.label}</Link>
      </div>
    </div>
  );
};

export default SectionFooter;
