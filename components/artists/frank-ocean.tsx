import ArtistHeader from "@/components/project-header"
import ProjectLinks from "@/components/project-links"

const frankProjects = [
    { title: "Undocumented, RARE", url: "https://untitled.stream/library/project/7ACKrCf0ItjMFWgNFEljg" },
    { title: "Endless", url: "https://untitled.stream/library/project/civMFzih9sZ1LxW5bA_9X" },
    { title: "Look at Us, We're in love", url: "https://untitled.stream/library/project/faKv6WgFqmCm5gc9zPsPD" },
    { title: "Nostalgia Ultra", url: "https://untitled.stream/library/project/g0D-PsqzR-YtzLu1zeZjH" },
    { title: "Frank Ocean Live at Coachella", url: "https://untitled.stream/library/project/y5niHGmgBm3jzFVW_3VLy" },
    { title: "Blonde Lossless", url: "https://untitled.stream/library/project/F340u6UrRm4JepHvTDH8X" },
]



export default function FrankOcean() {
    return (
        <div className="py-8">
            <div className="font-courier w-full">
                <ArtistHeader name="Frank Ocean" />
                <ProjectLinks projects={frankProjects} />
            </div>
        </div>
    )
}