import authHeader from "@/authheader"
import httpCommon from "@/http-common"

const getProfile = async (): Promise<UserProfile> => {
    const response = await httpCommon.get("https://api.spotify.com/v1/me", {headers: authHeader()})
    return response.data;
}

const ProfileService = {
    getProfile
}

export default ProfileService;