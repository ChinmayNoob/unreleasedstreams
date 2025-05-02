import ArtistHeader from "../project-header";
import ProjectLinks from "../project-links";

const cartiProjects = [
    { title: "Carti Unreleased 200 tracks", url: "https://untitled.stream/library/project/LNW88sD5yQywJbdGTPpBQ" },
    { title: "Whole Lotta Red v1", url: "https://untitled.stream/library/project/5MlYCplTx7wp1W6XLtIkg" },
    { title: "Whole Lotta Red v2", url: "https://untitled.stream/library/project/gjVfPLcFnfwlGbcT50dQd" },
    { title: "BABY BOI", url: "https://untitled.stream/library/project/shDssxow4rm1waOFK9rQ4" },
]

export default function PlayboiCarti() {
    return (
        <div className="py-8">
            <div className="font-courier w-full">
                <ArtistHeader name="Playboi Carti" />
                <ProjectLinks projects={cartiProjects} />
            </div>
        </div>
    )
}