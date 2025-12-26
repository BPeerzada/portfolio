import { Header } from "@/components/Header";
import { ArrowLeft, Database, Code, BarChart3, Lightbulb, FileCode } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Superstore Analytics | PlayPortal",
    description: "Sales performance analysis using Tableau with actionable insights for retail optimization.",
};

export default function SuperstoreProjectPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Header />

            {/* Hero */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-neutral-900 dark:to-neutral-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Excel", "Tableau", "Data Analysis", "Retail Analytics"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                        Superstore Sales
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            Performance Analytics
                        </span>
                    </h1>

                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        Comprehensive sales analysis identifying top-performing segments, regional trends, and actionable recommendations for profit optimization.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-16 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-6 text-sm font-medium overflow-x-auto py-4">
                        <a href="#narrative" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <Lightbulb className="w-4 h-4" /> Business Context
                        </a>
                        <a href="#data" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <Database className="w-4 h-4" /> Data Overview
                        </a>
                        <a href="#dashboard" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <BarChart3 className="w-4 h-4" /> Dashboard
                        </a>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                {/* Section 1: Business Context */}
                <section id="narrative">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-orange-500" />
                        Business Context
                    </h2>
                    <PlaceholderSection
                        title="Coming Soon"
                        description="Add your business problem statement and project objectives here."
                    />
                </section>

                {/* Section 2: Data Overview */}
                <section id="data">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Database className="w-8 h-8 text-green-500" />
                        Data Overview
                    </h2>
                    <PlaceholderSection
                        title="Dataset Details"
                        description="Add Excel/CSV data source information, key fields, and data preparation steps."
                    />
                </section>

                {/* Section 3: Dashboard */}
                <section id="dashboard">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-blue-500" />
                        Interactive Dashboard
                    </h2>
                    <PlaceholderSection
                        title="Tableau Embed"
                        description="Publish your Tableau workbook to Tableau Public, then add the embed iframe here."
                    />
                </section>

                {/* Section 4: Findings */}
                <section id="findings" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-neutral-900 dark:to-neutral-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        💡 Key Findings
                    </h2>
                    <PlaceholderSection
                        title="Insights & Recommendations"
                        description="Add your key findings and actionable recommendations here."
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
