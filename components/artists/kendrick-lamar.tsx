import ArtistHeader from "@/components/project-header"
import ProjectLinks from "@/components/project-links"

const kendrickProjects = [
    { title: "C4", url: "https://untitled.stream/library/project/SPkbAkBIjzombAVUgyeRA" },
    { title: "Kendrick Classics Unreleased", url: "https://untitled.stream/library/project/s0dLHyrSda6BkLjVBZWcJ" },
    { title: "Pre and Post Mr Morale's Vault", url: "https://untitled.stream/library/project/9FtVenkK3IJlqcawLIBGg" },
    { title: "No Sleep til NYC", url: "https://untitled.stream/library/project/zsO6JYzOJFwgijhUwHJIl" },
    { title: "K-dot Unrealeased Vault", url: "https://untitled.stream/library/project/6IQLHPve4SPEbMKRQvWAa" },
]
export default function KendrickLamar() {
    return (
        <div className="py-8">
            <div className="font-courier w-full">
                <ArtistHeader name="Kendrick Lamar" />
                <ProjectLinks projects={kendrickProjects} />
            </div>
        </div>

    )
}