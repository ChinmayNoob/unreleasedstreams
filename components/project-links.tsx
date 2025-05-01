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
        <ul className="list-disc pl-4 md:pl-6 space-y-2">
            {projects.map((project, index) => (
                <li key={index}>
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline hover:text-gray-600 flex items-center gap-1 text-lg md:text-2xl break-words"
                    >
                        <span>{project.title}</span>
                        <ExternalLink className="hidden md:inline-block h-4 w-4 flex-shrink-0" />
                    </Link>
                </li>
            ))}
        </ul>
    );
}