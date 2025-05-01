import Link from "next/link";
import { ExternalLink } from "lucide-react"

interface Project {
    title: string;
    url: string;
}

interface ProjectLinksProps {
    projects: Project[];
}

export default function ProjectLinks({ projects }: ProjectLinksProps) {

    return (
        <ul className="list-disc pl-6 space-y-2">
            {projects.map((project, index) => (
                <li key={index}>
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline hover:text-gray-600 flex gap-1 items-center text-2xl"
                    >
                        {project.title}
                        <ExternalLink className="h-4" />
                        {/* <MoveUpRight className="h-4" /> */}

                    </Link>
                </li>
            ))}
        </ul>
    );
}

