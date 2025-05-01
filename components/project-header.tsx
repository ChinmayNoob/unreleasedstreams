interface ArtistHeaderProps {
    name: string;
}

export default function ArtistHeader({ name }: ArtistHeaderProps) {
    return (
        <h2 className="text-4xl font-courier font-bold mb-4">{name}</h2>
    );
}
