import { House, Playlist } from "@phosphor-icons/react";
import SidebarElement from "./sidebarElement";

const Sidebar = () => {
  return (
    <div className="bg-[#212121] h-full pt-3">
      <div className="">Menu</div>
      <div className="mt-4 flex flex-col space-y-2">
      </div>
        <SidebarElement icon={<House size={24} color="#26a269" weight="fill" />} title="Home" />
        <SidebarElement icon={<Playlist size={24} color="#26a269" weight="fill" />} title="Playlist" />
        <SidebarElement icon={<House size={24} color="#26a269" weight="fill" />} title="Home" />
        <SidebarElement icon={<House size={24} color="#26a269" weight="fill" />} title="Home" />
    </div>
  );
};

export default Sidebar;