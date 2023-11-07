import axiosClient from "@/http-common"

const getRecommendedTracks = async (artists: Artist[], tracks: Track[]): Promise<Track[] | undefined> => {
    let artistsIds: string[] = artists.map((artist: Artist) => artist.id);
    let tracksIds: string[] = tracks.map((track: Track) => track.id);
    let artistsQuery: string = "seed_artists="
    let tracksQuery: string = "seed_tracks="
    artistsQuery += createQueryFromArray(artistsIds, 2);
    tracksQuery += createQueryFromArray(tracksIds, 3);
    try {
        const response = await axiosClient.get('v1/recommendations?' + artistsQuery + "&" + tracksQuery);
        console.log(response.data);
        if (response.data.tracks) {
            return response.data.tracks;
        }
        return undefined;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const createQueryFromArray = (array: string[], length: number) => {
    let result: string = "";
    for (let i: number = 0; i < length; i++) {
        result += array[i];
        result += ",";
    }
    return result.substring(0, result.length - 1);
}

const TracksService = {
    getRecommendedTracks
}

export default TracksService;