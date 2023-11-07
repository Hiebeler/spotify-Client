import ProfileService from "@/services/profile.service";
import { useQuery } from "react-query";

const useProfile = () => {
    return useQuery<UserProfile>({
        queryKey: "myUserProfile",
        queryFn: ProfileService.getProfile
      });
}

export default useProfile;