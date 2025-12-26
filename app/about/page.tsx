import { Header } from "@/components/Header";
import { Download } from "lucide-react";

export const metadata = {
    title: "About | Burhan U Din Peerzada",
    description: "Business Analytics student at USF skilled in SQL, Tableau, and Python.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Header />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                        Burhan U Din Peerzada
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                        Business Analytics student at the University of South Florida, passionate about transforming raw data into actionable business intelligence using SQL, Tableau, and Python.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <span>Tampa, FL</span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full self-center"></span>
                        <a href="mailto:bpeerzada@usf.edu" className="hover:text-blue-600 transition-colors">bpeerzada@usf.edu</a>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full self-center"></span>
                        <span>(813)-597-1865</span>
                    </div>
                </div>

                {/* Education */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                        Education
                    </h2>
                    <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-neutral-900 dark:text-white">University of South Florida – Muma College of Business</h3>
                            <span className="text-sm text-neutral-500">Expected Dec 2027</span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">Bachelor of Science in Business Analytics & Information Systems</p>
                        <div className="flex gap-4 text-sm">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">GPA: 3.95</span>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500">
                            <strong className="text-neutral-700 dark:text-neutral-300">Coursework:</strong> Data Analytics, AI & Analytics, Database Design, Computers in Business.
                        </p>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillCategory title="Analytics & Visualization" skills={["Tableau (Intermediate)", "Power BI (Beginner)", "Excel Dashboards"]} />
                        <SkillCategory title="Programming & Data" skills={["SQL (Intermediate)", "Python (Beginner)", "R (Beginner)", "Google Colab"]} />
                        <SkillCategory title="AI & Automation" skills={["Gemini / ChatGPT", "CRM (ServiceNow)", "Splashtop", "AnyDesk"]} />
                        <SkillCategory title="Productivity & Design" skills={["Microsoft Office", "Adobe Photoshop", "Adobe InDesign"]} />
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                        Experience
                    </h2>
                    <div className="space-y-8">
                        <ExperienceItem
                            role="Knack Tutor"
                            company="Muma College of Business, USF"
                            date="Sep 2025 – Present"
                            description={[
                                "Coach undergraduate peers in Financial & Managerial Accounting, Business Statistics, and Data Analytics.",
                                "Diagnose learning gaps by asking targeted questions and tailor instruction to reinforce conceptual understanding.",
                                "Guide students through structured problem-solving approaches, enhancing confidence and technical proficiency."
                            ]}
                        />
                        <ExperienceItem
                            role="IT Support Assistant"
                            company="Acme Solutions (Remote)"
                            date="Jun 2024 – Aug 2024"
                            description={[
                                "Delivered Tier-1 technical support for academic institutions, resolving login failures and software functionality issues.",
                                "Troubleshot devices and systems through Splashtop and other remote access tools to maintain user continuity."
                            ]}
                        />
                        <ExperienceItem
                            role="Event Coordinator"
                            company="Genius Career Consultancy"
                            date="Dec 2022 – Jan 2023"
                            description={[
                                "Organized a 24-day inter-school soccer tournament involving 200 participants from 17 schools.",
                                "Enforced eligibility screening processes ensuring fairness and compliance."
                            ]}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
    return (
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="text-xs bg-gray-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ExperienceItem({ role, company, date, description }: { role: string, company: string, date: string, description: string[] }) {
    return (
        <div className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-black"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{role}</h3>
                <span className="text-sm text-neutral-500">{date}</span>
            </div>
            <div className="text-blue-600 dark:text-blue-400 text-sm mb-3">{company}</div>
            <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
                {description.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
