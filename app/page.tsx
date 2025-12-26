import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Header } from "@/components/Header";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

// Featured project (not from markdown)
const featuredProject = {
    slug: "sunrise-hospital",
    title: "Sunrise General Hospital",
    description: "End-to-end analytics: ERD design, PostgreSQL database, Python data generation, and interactive Tableau-style dashboard.",
    tags: ["SQL", "PostgreSQL", "Python", "Tableau"],
    isFeatured: true,
};

export default function Home() {
    const projects = getAllProjects();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black selection:bg-blue-500/30">
            <Header />

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

            {/* Featured Project */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    Featured Project
                </h2>
                <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="group block rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-1 transition-all hover:shadow-xl hover:shadow-blue-500/20"
                >
                    <div className="bg-white dark:bg-neutral-900 rounded-xl p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {featuredProject.tags.map((tag) => (
                                <span key={tag} className="text-xs font-medium uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {featuredProject.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                            {featuredProject.description}
                        </p>
                        <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                            Launch Interactive Playground
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
            </section>

            {/* Other Projects Grid */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
                <div className="flex items-end justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                        Other Projects
                    </h2>
                    <span className="text-neutral-500 text-sm">
                        {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
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
