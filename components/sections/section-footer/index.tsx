import Link from "next/link";

type SectionFooterProps = {
  links: Array<{
    title: string;
    url: string;
  }>;
  button:{
    label:string,
    url:string
  }
};

export const SectionFooter = (props:SectionFooterProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-around w-full">
      {props.links.map((link, index) => {
        return (
          <Link href={link.url} key={index}>
            {link.title}
          </Link>
        );
      })}
      </div>
      <Link href={props.button.url}>{props.button.label}</Link>
    </div>
  );
};

export default SectionFooter;
