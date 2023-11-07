import ProfileService from "@/services/profile.service";
import { useQuery } from "react-query";

const useTopTracks = (oneMonth: boolean) => {
    return useQuery({
        queryKey: ["myTopTracks", oneMonth],
        queryFn: () => ProfileService.getTopTracks(oneMonth),
        onSuccess(data) {
            console.log(data);
        },
    });
}

export default useTopTracks;