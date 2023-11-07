import { ReactNode } from "react";

interface SidebarElementProps {
    icon: ReactNode;
    title: string;
}

const SidebarElement = (props: SidebarElementProps) => {
    return (
        <button className="flex flex-row space-x-4 px-6 py-2 hover:bg-primary hover:bg-opacity-40 border-l-4 border-transparent hover:border-primary duration-100">
            {props.icon}
            <p>{props.title}</p>
        </button>
    )
}

export default SidebarElement;