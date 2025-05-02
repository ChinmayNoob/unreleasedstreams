import ArtistHeader from "../project-header"
import ProjectLinks from "../project-links"

 const uziProjects = [
    {title:"Lil Uzi Vert Best Unreleased Vault",url:"https://untitled.stream/library/project/OO6qy7h7dK67x2m4zrRwU"}
 ]
export default function LilUziVert(){
    return (
        <div className="py-8">
        <div className="font-courier w-full">
            <ArtistHeader name="Lil Uzi Vert" />
            <ProjectLinks projects={uziProjects} />
        </div>
    </div>
    )
}