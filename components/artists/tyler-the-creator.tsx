import ArtistHeader from "@/components/project-header"
import ProjectLinks from "@/components/project-links"

const tylerProjects = [
    { title: "Wolf (DELUXE)", url: "https://untitled.stream/library/project/ZXdvzgNkfPxD0JiJwtVQB" },
    { title: "Bastard", url: "https://untitled.stream/library/project/fhXHETugX8kjEjpsLBDNk" },
    { title: "Cherry Bomb", url: "https://untitled.stream/library/project/1IX-NkRGAELzFusM1Xakn" },
    { title: "NPR Tiny Desk Concert", url: "https://untitled.stream/library/project/4Gyr7FfekuNXRPLwzQEIq" },
]
export default function TylerTheCreator() {
    return (
        <div className="py-8">
            <div className="font-courier w-full">
                <ArtistHeader name="Tyler, the Creator" />
                <ProjectLinks projects={tylerProjects} />
            </div>
        </div>
    )
}