interface Track {
    name: string;
    popularity: number;
    preview_url: string | null;
    duration_ms: number;
    album: Album;
    artists: Artist[];
}