import Link from "next/link";
import { Project } from "@/types/project";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { TechIconRow } from "./TechIcon";

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className={cn(
                "group block rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 transition-all hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50",
                className
            )}
        >
            <div className="flex flex-col h-full">
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                        <TechIconRow tags={project.tags.slice(0, 4)} />
                        <div className="flex items-center text-neutral-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(project.date).toLocaleDateString()}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                <div className="flex items-center text-sm font-semibold text-neutral-900 dark:text-white mt-auto">
                    Launch Playground
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
