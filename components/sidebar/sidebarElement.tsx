import Link from "next/link";
import { ReactNode } from "react";

interface SidebarElementProps {
    icon: ReactNode;
    title: string;
    open: boolean;
    href: string;
}

const SidebarElement = (props: SidebarElementProps) => {
    return (
        <Link href={props.href} className={`flex flex-row pl-4 ${props.open ? 'pr-8': 'pr-2'} py-2 hover:bg-primary hover:bg-opacity-40 border-l-4 border-transparent hover:border-primary duration-100`}>
            <div className="mr-4">{props.icon}</div>
            <p className={`${props.open ? '': 'hidden'}` }>{props.title}</p>
        </Link>
    )
}

export default SidebarElement;