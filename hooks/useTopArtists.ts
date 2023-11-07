import ProfileService from "@/services/profile.service";
import { useQuery } from "react-query";

const useTopArtists = (oneMonth: boolean) => {
    return useQuery({
        queryKey: ["myTopArtists", oneMonth],
        queryFn: () => ProfileService.getTopArtists(oneMonth),
        onSuccess(data) {
            console.log(data);
        },
    });
}

export default useTopArtists;