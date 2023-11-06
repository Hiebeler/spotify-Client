interface TopArtists {
    next: string | null;
    previous: string | null;
    limit: number;
    items: Artist[]
}