import httpCommon from "@/http-common"

const getProfile = async (): Promise<UserProfile> => {
    const response = await httpCommon.get("v1/me");
    return response.data;
}

const getTopTracks = async (month: boolean): Promise<TopTracks> => {
    let query = "";
    if (month) {
        query = "?time_range=short_term";
    }
    const response = await httpCommon.get("v1/me/top/tracks" + query);
    return response.data;
}

const getTopArtists = async (month: boolean): Promise<TopArtists> => {
    let query = "";
    if (month) {
        query = "?time_range=short_term";
    }
    const response = await httpCommon.get("v1/me/top/artists" + query);
    return response.data;
}

const ProfileService = {
    getProfile,
    getTopTracks,
    getTopArtists
}

export default ProfileService;