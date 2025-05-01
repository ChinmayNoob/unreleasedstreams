import ArtistHeader from "../project-header";
import ProjectLinks from "../project-links";


const kanyeProjects = [
    { title: "Yandhi (2018)", url: "https://untitled.stream/library/project/-6q8lH_K6Wua6GTIL1Miv" },
    { title: "Freshman Adjustment (2003)", url: "https://untitled.stream/library/project/K7ZvFU3LwK2xg3A1sLVff" },
    { title: "Freshman Adjustment 2 (2006)", url: "https://untitled.stream/library/project/DnHMW6v4l6vdUjF6qq7vY" },
    { title: "Good Ass Job (2009)", url: "https://untitled.stream/library/project/tYfJmvKvCClU5ESAubW9t" },
    { title: "Yeezus 2 (2014)", url: "https://untitled.stream/library/project/d9yBFYWCa6CDKLL5DW7qn" },
    { title: "Thank God for the Drugs (2016)", url: "https://untitled.stream/library/project/RuSV1YXTQcQp_CdDRwVhw" },
    { title: "Turbo Grfx 16 (2016)", url: "https://untitled.stream/library/project/A9iJCpFj1w7rrFYdyRBNg" },
    { title: "Watch the Throne 2 (2018)", url: "https://untitled.stream/library/project/BHV86GHoW4XvyfCuQwYw4" },
    { title: "Jesus is King II D.R. DRE Version (2020)", url: "https://untitled.stream/library/project/OZkdz-tju8GsRZvzV1z6g" },
    { title: "With Child (2020)", url: "https://untitled.stream/library/project/n7Lvrm0ZDqdDSZ7uRR9uJ" },
    { title: "Donda 2 (2022)", url: "https://untitled.stream/library/project/JOCAwVvIG_xD95nrb0B5F" },
    { title: "Someday We'll be Free (2022)", url: "https://untitled.stream/library/project/pGKzYA8AkOby18xrAkD6-" },
    { title: "Cuck (2025)", url: "https://untitled.stream/library/project/qlaJruswhYvseKzQCpWuq" },
    { title: "Bully (2025)", url: "https://untitled.stream/library/project/DdbuqDJHQ5B94DrqBpTEj" },
    { title: "Donda 2 (2025)", url: "https://untitled.stream/library/project/JWmZCXft8C9Yrurjot3wQ" },
    { title: "So Help Me God:Angels (2015)", url: "https://untitled.stream/library/project/UZHEVWjyvFk_aiLHF-zt1" },
    // Add more titles and URLs here
];

export default function KanyeWest() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="font-courier w-full md:w-1/2">
                <ArtistHeader name="Kanye West" />
                <ProjectLinks projects={kanyeProjects} />
            </div>
        </div>
    );
}
