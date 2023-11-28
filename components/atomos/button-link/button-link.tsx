import Link from "next/link";

export interface ButtonLinkProps {
    url: string;
    label?: string;
    icon?: any;
    children?: any;
}

export const ButtonLink = (props: ButtonLinkProps) => {
    return (
        <Link href={props.url} className="bg-slate-500 rounded-full w-8 h-8 text-white">
            {props?.label ? props.label : "" }
            {props?.children}
        </Link>
    )
};


export default ButtonLink;
