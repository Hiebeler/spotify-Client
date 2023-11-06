"use client";
import ArtistCard from "@/components/artistCard";
import TrackCard from "@/components/trackCard";
import ProfileService from "@/services/profile.service";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";

const Profile = () => {
  const [monthTracks, setMonthTracks] = useState<boolean>(false);
  const [monthArtists, setMonthArtists] = useState<boolean>(false);

  const { data: profile } = useQuery<UserProfile>({
    queryKey: "userProfile",
    queryFn: ProfileService.getProfile,
    onSuccess(data) {
      console.log(data);
    },
  });

  const { data: topTracks } = useQuery({
    queryKey: ["myTopTracks", monthTracks],
    queryFn: () => ProfileService.getTopTracks(monthTracks),
    onSuccess(data) {
      console.log(data);
    },
  });

  const { data: topArtists } = useQuery({
    queryKey: ["myTopArtists", monthArtists],
    queryFn: () => ProfileService.getTopArtists(monthArtists),
    onSuccess(data) {
      console.log(data);
    },
  });

  return (
    <div className="container mt-20">
      <div className="mt-8 flex flex-row space-x-5">
        <div className="relative w-48 h-48 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          {profile?.images.length !== 0 && profile?.images[0] ? (
            <Image
              src={profile?.images[profile?.images.length - 1].url}
              alt="profile Image"
              fill
              className="object-cover"
            />
          ) : (
            <svg
              className="absolute w-52 h-52 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>
        <div className="flex flex-col justify-end space-y-2">
          <h2 className="text-5xl">{profile?.display_name}</h2>
          <div className="flex flex-row space-x-1">
            <p className="text-text_light dark:text-text_dark">Followers:</p>
            <p className="text-text_light dark:text-text_dark">
              {profile?.followers.total}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex flex-row justify-between">
          <h3>Top tracks this month:</h3>
          <div className="flex flex-row space-x-2">
            <button
              onClick={() => setMonthTracks(false)}
              className={`${
                !monthTracks ? "bg-primary" : "bg-[#1c1c1b]"
              } text-white font-bold py-1 px-2 rounded`}
            >
              6 months
            </button>
            <button
              onClick={() => setMonthTracks(true)}
              className={`${
                monthTracks ? "bg-primary" : "bg-[#1c1c1b]"
              } text-white font-bold py-1 px-2 rounded`}
            >
              4 weeks
            </button>
          </div>
        </div>
        <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
          {topTracks ? (
            topTracks.items.map((topTrack: Track) => {
              return (
                <div key={topTrack.name}>
                  <TrackCard track={topTrack} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="mt-10">
      <div className="flex flex-row justify-between">
          <h3>Top artists this month:</h3>
          <div className="flex flex-row space-x-2">
            <button
              onClick={() => setMonthArtists(false)}
              className={`${
                !monthArtists ? "bg-primary" : "bg-[#1c1c1b]"
              } text-white font-bold py-1 px-2 rounded`}
            >
              6 months
            </button>
            <button
              onClick={() => setMonthArtists(true)}
              className={`${
                monthArtists ? "bg-primary" : "bg-[#1c1c1b]"
              } text-white font-bold py-1 px-2 rounded`}
            >
              4 weeks
            </button>
          </div>
        </div>
        <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
          {topArtists ? (
            topArtists.items.map((artist: Artist) => {
              return (
                <div key={artist.name}>
                  <ArtistCard artist={artist} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
