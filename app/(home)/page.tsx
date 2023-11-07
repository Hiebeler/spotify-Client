"use client";

import TrackCard from "@/components/trackCard";
import useTopArtists from "@/hooks/useTopArtists";
import useTopTracks from "@/hooks/useTopTracks";
import TracksService from "@/services/tracks.service";
import { useQuery } from "react-query";

const Home = () => {
  const { data: topArtists } = useTopArtists(true);
  const { data: topTracks } = useTopTracks(true);
  const { data: recommendedTracks } = useQuery<Track[] | undefined>({
    queryKey: ["recommendedTracks", topArtists, topTracks],
    queryFn: () =>
      TracksService.getRecommendedTracks(topArtists?.items!, topTracks?.items!),
    enabled: !!topArtists && !!topTracks,
  });

  return (
    <div className="container mt-20">
      <h3>Recommended Tracks:</h3>
      <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
        {recommendedTracks ? (
          recommendedTracks?.map((track: Track) => (
            <div key={track.id}>
              <TrackCard track={track} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
