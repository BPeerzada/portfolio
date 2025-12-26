import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
    const projects = getAllProjects();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
                        Data Analytics <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Playground
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-2xl">
                        A modular portfolio exploring complex data problems.
                        Dive into interactive notebooks, SQL labs, and live dashboards directly in your browser.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
                <div className="flex items-end justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <span className="text-neutral-500 text-sm">
                        {projects.length} {projects.length === 1 ? 'Project' : 'Projects'} Available
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
                        <p className="text-neutral-500">No projects found. Add a markdown file to _projects to get started.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
