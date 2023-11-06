"use client";
import { PlayCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface TrackCardProps {
  track: Track;
}

const TrackCard = (props: TrackCardProps) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <div
      className="relative w-36 md:w-48 h-full rounded-lg shadow dark:bg-[#1c1c1b]"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="relative flex justify-center">
        <a
          className={`absolute z-50 bottom-0 duration-500 cursor-pointer ${
            mouseOver ? "opacity-100" : "opacity-0"
          }`}
          href={props.track.preview_url!}
        >
          <PlayCircle size={64} color="#1DB954" weight="fill" />
        </a>
        <Image
          className="rounded-t-lg !relative h-auto object-cover"
          src={
            props.track.album.images[props.track.album.images.length - 2]!.url
          }
          fill
          alt=""
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.track.name}
          </h5>
        </a>
        <div className="flex flex-row space-x-2 flex-wrap">
          {props.track.artists.map((artist: Artist, index: number) => {
            return (
              <>
                <p
                  key={index}
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  {artist.name}
                  {index !== props.track.artists.length - 1 ? "," : <></>}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
