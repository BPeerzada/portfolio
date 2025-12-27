import { Header } from "@/components/Header";
import { TableauEmbed } from "@/components/TableauEmbed";
import { ArrowLeft, Database, BarChart3, Lightbulb, PieChart, TrendingUp, Users, ShoppingCart, Truck, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Retail Performance Analytics | PlayPortal",
    description: "Strategic insights into sales, profit, and customer behavior using Tableau and Python.",
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
                        {["Business Analytics", "Tableau", "Python", "Predictive Modeling"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                        Retail Performance Analytics
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            Driving Strategic Decisions
                        </span>
                    </h1>

                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        A comprehensive analysis of sales, profit, and customer insights to identify key revenue drivers and operational inefficiencies.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-16 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-6 text-sm font-medium overflow-x-auto py-4">
                        <a href="#narrative" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <Lightbulb className="w-4 h-4" /> Business Problem
                        </a>
                        <a href="#data" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <Database className="w-4 h-4" /> Data & Prep
                        </a>
                        <a href="#analytics" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <TrendingUp className="w-4 h-4" /> Analytics
                        </a>
                        <a href="#dashboard" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <BarChart3 className="w-4 h-4" /> Dashboard
                        </a>
                        <a href="#conclusions" className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400 whitespace-nowrap">
                            <AlertCircle className="w-4 h-4" /> Conclusions
                        </a>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Section 1: Business Problem */}
                <section id="narrative">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-orange-500" />
                        Business Problem & Objectives
                    </h2>
                    <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                        <p>
                            In the competitive retail landscape, understanding customer behavior and optimizing operations are crucial.
                            The core problem addressed in this project is to identifying the key drivers of revenue and profitability
                            across different segments, categories, and regions.
                        </p>
                        <h3>Key Business Questions</h3>
                        <ul>
                            <li><strong>Customer Segmentation:</strong> How do Regular, New, and Premium segments contribute to revenue/profit?</li>
                            <li><strong>Trends:</strong> What are the sales/profit trends, and how can we address fluctuations?</li>
                            <li><strong>Optimization:</strong> How can we optimize strategies for high-performing categories (like Electronics) vs. underperformers?</li>
                            <li><strong>Pricing Strategy:</strong> What is the optimal discount level to maximize volume without eroding margins?</li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: Data Source */}
                <section id="data">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Database className="w-8 h-8 text-green-500" />
                        Data Source & Preparation
                    </h2>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Dataset Summary</h3>
                                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
                                    <li>• <strong>Source:</strong> &quot;New Retail Data&quot; (Educational Dataset)</li>
                                    <li>• <strong>Volume:</strong> 302,010 transactions</li>
                                    <li>• <strong>Features:</strong> 30 columns including Customer ID, Product Category, Sales Amount, Discount, etc.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Data Cleaning Steps</h3>
                                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
                                    <li>• <strong>Imputation:</strong> Filled missing numerical values with median, categorical with mode.</li>
                                    <li>• <strong>Type Conversion:</strong> Corrected data types for IDs (object) and Dates (datetime).</li>
                                    <li>• <strong>Duplicates:</strong> Removed 4 duplicate records.</li>
                                    <li>• <strong>Outliers:</strong> Retained high-value transactions as valid outliers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Analytics Findings */}
                <section id="analytics">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                        Diagnostic & Predictive Analytics
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <AnalysisCard
                            title="Sales by Category"
                            icon={<ShoppingCart className="w-5 h-5 text-blue-500" />}
                            stats="Electronics: $18.26M"
                            description="Electronics leads revenue, followed by Grocery ($17.05M). Literature is significantly underperforming. Strategy: Maximize top performers."
                        />
                        <AnalysisCard
                            title="Sales vs Profit Trend"
                            icon={<TrendingUp className="w-5 h-5 text-green-500" />}
                            stats="Gap: Rev $11M vs Profit $3M"
                            description="Profit does not grow proportionally with sales. Peaks and troughs suggest seasonality and potential pricing inefficiencies."
                        />
                        <AnalysisCard
                            title="Customer Segments"
                            icon={<Users className="w-5 h-5 text-purple-500" />}
                            stats="Regulars: $37M Rev"
                            description="Regular customers drive the most revenue. Significant opportunity exists to convert 'New' ($23M) customers into 'Regulars'."
                        />
                        <AnalysisCard
                            title="Delivery Fulfillment"
                            icon={<Truck className="w-5 h-5 text-red-500" />}
                            stats="57% Not Delivered On-Time"
                            description="Major operational bottleneck. More than half of orders miss their quoted delivery date, risking customer satisfaction."
                        />
                    </div>

                    <div className="mt-8 bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg mb-2">Predictive Insight: Discount Impact</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            What-if analysis reveals an inverse relationship between discount levels and profit.
                            Aggressive discounts increase volume but erode margins faster.
                            <strong>Recommendation:</strong> Use targeted discounts for specific segments (e.g., New Customers) rather than blanket promotions.
                        </p>
                    </div>
                </section>

                {/* Section 4: Dashboard */}
                <section id="dashboard">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-orange-500" />
                        Interactive Dashboard
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                        The final dashboard features a toggle to switch between <strong>Sales & Profit Overview</strong> and <strong>Consumer Metrics</strong>.
                    </p>

                    <div className="mb-8">
                        <TableauEmbed
                            vizUrl="BusinessAnalyticsFinalTableu_Peerzada/SalesandProfitDashboard"
                            staticImage="https://public.tableau.com/static/images/Bu/BusinessAnalyticsFinalTableu_Peerzada/SalesandProfitDashboard/1.png"
                            height={850}
                        />
                    </div>
                </section>

                {/* Section 5: Conclusions */}
                <section id="conclusions" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-neutral-900 dark:to-neutral-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        💡 Strategic Recommendations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FindingCard
                            number={1}
                            title="Fix Fulfillment Issues"
                            description="Urgently investigate logistics. With 57% of orders late, improving this is the lowest-hanging fruit for retention."
                        />
                        <FindingCard
                            number={2}
                            title="Focus on 'Regulars'"
                            description="Implement loyalty programs. Regulars generate $37M; retaining them is more cost-effective than acquisition."
                        />
                        <FindingCard
                            number={3}
                            title="Target Medium Income & Ages 18-25"
                            description="Data shows these demographics are top spenders. Tailor marketing campaigns specifically to these groups."
                        />
                        <FindingCard
                            number={4}
                            title="Optimize Discounts"
                            description="Stop blanket sales. Use the predictive model to set discounts that maximize conversion without destroying profit margins."
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}

function FindingCard({ number, title, description }: { number: number; title: string; description: string }) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold shrink-0">
                    {number}
                </div>
                <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                </div>
            </div>
        </div>
    );
}

function AnalysisCard({ title, icon, stats, description }: { title: string; icon: React.ReactNode; stats: string; description: string }) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors">
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                    {icon}
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{title}</h3>
            </div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{stats}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{description}</p>
        </div>
    );
}
