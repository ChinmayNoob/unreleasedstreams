import ArtistHeader from "../project-header";
import ProjectLinks from "../project-links";

const travisProjects = [
    {title:"Owl Pharoah",url:"https://untitled.stream/library/project/A3G56Jn3JjRoLbBcsxh9t"},
    {title:"Days Before Rodeo Full Vault",url:"https://untitled.stream/library/project/n5qbhzztB2hHoajn7UxwQ"},
    {title:"La Flame Classics",url:"https://untitled.stream/library/project/l6IHO3ae0UlUlvu2c3Npb"},
    {title:"Travis Scott Unreleased Vault v1",url:"https://untitled.stream/library/project/ksQY8AavbhOUdhTLPZWNI"},
    {title:"Modern Jam x NOKIA",url:"https://untitled.stream/library/project/vf7YzYVJRdLZHLebe0ISN"}
]

export default function TravisScott() {
    return (
        <div className="py-8">
            <div className="font-courier w-full">
                <ArtistHeader name="Travis Scott" />
                <ProjectLinks projects={travisProjects} />
            </div>
        </div>

    )
}