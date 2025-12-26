import { Header } from "@/components/Header";
import { ArrowLeft, Database, Code, BarChart3, Lightbulb, FileCode } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Automobile Analysis | PlayPortal",
    description: "Statistical analysis and visualization of automobile data using Python and data science techniques.",
};

export default function AutomobileProjectPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Header />

            {/* Hero */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-neutral-900 dark:to-neutral-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Pandas", "Statistics", "Data Visualization"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                        Automobile Data
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            Statistical Analysis
                        </span>
                    </h1>

                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        Exploratory data analysis and statistical modeling of automobile characteristics to uncover pricing patterns and feature relationships.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-16 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-6 text-sm font-medium overflow-x-auto py-4">
                        <a href="#narrative" className="flex items-center gap-2 text-neutral-600 hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400 whitespace-nowrap">
                            <Lightbulb className="w-4 h-4" /> Overview
                        </a>
                        <a href="#python" className="flex items-center gap-2 text-neutral-600 hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400 whitespace-nowrap">
                            <FileCode className="w-4 h-4" /> Python Code
                        </a>
                        <a href="#visualizations" className="flex items-center gap-2 text-neutral-600 hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400 whitespace-nowrap">
                            <BarChart3 className="w-4 h-4" /> Visualizations
                        </a>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                {/* Section 1: Overview */}
                <section id="narrative">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-emerald-500" />
                        Project Overview
                    </h2>
                    <PlaceholderSection
                        title="Coming Soon"
                        description="Add your project objectives, dataset description, and methodology here."
                    />
                </section>

                {/* Section 2: Python Code */}
                <section id="python">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <FileCode className="w-8 h-8 text-yellow-500" />
                        Python Analysis
                    </h2>
                    <PlaceholderSection
                        title="Interactive Notebook"
                        description="Add Trinket or Deepnote embed with your Python analysis code."
                    />
                </section>

                {/* Section 3: Visualizations */}
                <section id="visualizations">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-blue-500" />
                        Visualizations
                    </h2>
                    <PlaceholderSection
                        title="Charts & Graphs"
                        description="Add your matplotlib/seaborn visualizations or Tableau dashboard here."
                    />
                </section>

                {/* Section 4: Findings */}
                <section id="findings" className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-neutral-900 dark:to-neutral-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        💡 Statistical Findings
                    </h2>
                    <PlaceholderSection
                        title="Key Insights"
                        description="Add your statistical findings, correlations, and conclusions here."
                    />
                </section>
            </div>
        </main>
    );
}

function PlaceholderSection({ title, description }: { title: string; description: string }) {
    return (
        <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl p-8 text-center">
            <p className="text-lg font-semibold text-neutral-500 dark:text-neutral-400 mb-2">{title}</p>
            <p className="text-sm text-neutral-400 dark:text-neutral-500">{description}</p>
        </div>
    );
}
