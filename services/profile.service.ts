import authHeader from "@/authheader"
import httpCommon from "@/http-common"

const getProfile = async (): Promise<UserProfile> => {
    const response = await httpCommon.get("v1/me");
    return response.data;
}

const getTopTracks = async (): Promise<TopTracks> => {
    const response = await httpCommon.get("v1/me/top/tracks");
    return response.data;
}

const ProfileService = {
    getProfile,
    getTopTracks
}

export default ProfileService;