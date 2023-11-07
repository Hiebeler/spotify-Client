interface Track {
    name: string;
    id: string;
    popularity: number;
    preview_url: string | null;
    duration_ms: number;
    album: Album;
    artists: Artist[];
}