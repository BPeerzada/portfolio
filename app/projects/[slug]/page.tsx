import { getAllProjects, getProjectData } from "@/lib/projects";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    // Await the params object before accessing properties
    const { slug } = await params;
    const project = await getProjectData(slug); // Function is async now (remark)

    if (!project) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-white dark:bg-black selection:bg-blue-500/30">
            {/* Header / Hero */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="flex items-center space-x-4 text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-neutral-500 text-sm">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(project.date).toLocaleDateString()}
                        </div>
                    </div>

                    {/* Links */}
                    {(project.githubUrl || project.embedUrl) && (
                        <div className="flex gap-4 mt-8">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    View Code
                                </a>
                            )}
                            {project.embedUrl && (
                                <a
                                    href={project.embedUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black text-neutral-900 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Open Playground
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div
                    className="prose prose-lg prose-neutral dark:prose-invert max-w-none
                prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl
                prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500
                prose-img:rounded-xl prose-img:shadow-lg"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />
            </div>
        </article>
    );
}
