import Image from "next/image";
import { useState } from "react";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = (props: ArtistCardProps) => {
  return (
    <div className="relative w-36 md:w-48 h-full rounded-lg shadow dark:bg-[#1c1c1b]">
      <div className="flex justify-center rounded-full p-5 h-36 md:h-48">
        <Image
          className="object-cover rounded-full shadow-md"
          src={props.artist.images[props.artist.images.length - 2]!.url}
          height={192}
          width={192}
          alt=""
        />
      </div>
      <div className="p-5 flex">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {props.artist.name}
        </h5>
      </div>
    </div>
  );
};

export default ArtistCard;
