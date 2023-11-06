"use client";
import TrackCard from "@/components/trackCard";
import ProfileService from "@/services/profile.service";
import { useQuery } from "react-query";

const Profile = () => {
  const { data: profile } = useQuery<UserProfile>({
    queryKey: "userProfile",
    queryFn: ProfileService.getProfile,
    onSuccess(data) {
      console.log(data);
    },
  });

  const { data: topTracks } = useQuery({
    queryKey: "myTopTracks",
    queryFn: ProfileService.getTopTracks,
    onSuccess(data) {
      console.log(data);
    },
  });

  return (
    <div className="container mt-20">
      <h2>Profile</h2>
      <div className="mt-8 flex flex-row">
        <div></div>
        <p>{profile?.display_name}</p>
      </div>
      <div className="mt-10">
        <h3>Top Tracks:</h3>
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
    </div>
  );
};

export default Profile;
