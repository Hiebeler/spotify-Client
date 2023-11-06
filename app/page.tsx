"use client"
import ProfileService from "@/services/profile.service";
import { useQuery } from "react-query";

const Home = () => {
  const { data: profile } = useQuery<UserProfile>({
    queryKey: "userProfile",
    queryFn: ProfileService.getProfile,
    onSuccess(data) {
        console.log(data);
    },
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">spotiy Client</h1>
      <p>{profile?.display_name}</p>
    </main>
  );
};

export default Home;
