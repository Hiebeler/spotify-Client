import { House, List, Playlist, User } from "@phosphor-icons/react";
import SidebarElement from "./sidebarElement";
import Image from "next/image";
import artist from "../../public/icons/artist.png";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="bg-[#212121] h-full pt-3">
      <button onClick={() => setOpen(!open)} className="m-4"><List size={32} /></button>
      <div className="mt-4 flex flex-col space-y-2">
        <SidebarElement icon={<House size={24} color="#1DB954" weight="fill" />} title="Home" open={open} href="/"/>
        <SidebarElement icon={<Playlist size={24} color="#1DB954" weight="fill" />} title="Playlists" open={open} href="#"/>
        <SidebarElement icon={<Image width={24} height={24} src={artist} alt="artist" />} title="Artists" open={open} href="#"/>
        <SidebarElement icon={<User size={24} color="#1DB954" weight="fill" />} title="Profile" open={open} href="/profile"/>
        </div>
    </div>
  );
};

export default Sidebar;