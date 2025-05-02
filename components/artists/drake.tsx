import ArtistHeader from "../project-header"
import ProjectLinks from "../project-links"

const drakeProjects = [
    { title: "100 GIGS : THE ALBUM", url: "https://untitled.stream/library/project/eZT9iSHxm4BiyL5lkoqMg" },
    { title: "Dark Lane Tapes", url: "https://untitled.stream/library/project/PPiZJYc3dNBzs00WaU9QD" },
    { title: "Drake Unreleased Vault", url: "https://untitled.stream/library/project/Ex8eoBZ3M4jwXl3DxClBo" },
]
export default function Drake() {
    return (
        <div className="py-8">
            <div className="font-courier w-full">
                <ArtistHeader name="Drake" />
                <ProjectLinks projects={drakeProjects} />
            </div>
        </div>
    )
}