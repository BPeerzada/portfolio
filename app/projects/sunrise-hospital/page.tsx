import { Header } from "@/components/Header";
import Image from "next/image";
import {
    MonthlyAppointmentsChart,
    NoShowRateChart,
    BillingPerformanceChart,
    DoctorWorkloadChart,
    DiagnosisDistributionChart,
    DepartmentPerformanceChart,
} from "@/components/SunriseDashboard";
import { ArrowLeft, Database, Code, BarChart3, Lightbulb, FileCode } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Sunrise Hospital Analytics | Interactive Playground",
    description: "End-to-end data analytics project: ERD design, PostgreSQL, Python data generation, and Tableau dashboard.",
};

export default function SunriseHospitalPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Header />

            {/* Hero */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-neutral-900 dark:to-neutral-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["SQL", "PostgreSQL", "Python", "Tableau", "Data Modeling"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                        Sunrise General Hospital
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            End-to-End Analytics
                        </span>
                    </h1>

                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        A complete data analytics workflow from conceptual modeling to interactive dashboards.
                        Design an ERD, build a PostgreSQL database, generate synthetic data, and visualize
                        insights for strategic decision-making.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-16 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-6 text-sm font-medium overflow-x-auto py-4">
                        <a href="#narrative" className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 whitespace-nowrap">
                            <Lightbulb className="w-4 h-4" /> Narrative
                        </a>
                        <a href="#erd" className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 whitespace-nowrap">
                            <Database className="w-4 h-4" /> ERD
                        </a>
                        <a href="#sql" className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 whitespace-nowrap">
                            <Code className="w-4 h-4" /> SQL Lab
                        </a>
                        <a href="#python" className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 whitespace-nowrap">
                            <FileCode className="w-4 h-4" /> Python
                        </a>
                        <a href="#dashboard" className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 whitespace-nowrap">
                            <BarChart3 className="w-4 h-4" /> Dashboard
                        </a>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                {/* Section 1: Business Narrative */}
                <section id="narrative">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-blue-500" />
                        Business Narrative
                    </h2>
                    <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                        <p>
                            Sunrise General Hospital is a growing multi-specialty healthcare provider serving thousands
                            of patients annually across departments: <strong>Cardiology, Radiology, Orthopedics,
                                Neurology, Oncology, and Emergency Care</strong>.
                        </p>
                        <p>
                            As patient volume increases, leadership identified the need for a unified analytics system
                            to monitor operational efficiency, patient flow, clinical workload, and billing performance.
                        </p>
                        <h3>Key Questions Addressed</h3>
                        <ul>
                            <li>What is the monthly appointment volume vs. long-term average?</li>
                            <li>Are no-show rates affecting clinical throughput?</li>
                            <li>Which doctors carry the highest workloads?</li>
                            <li>What diagnoses appear most frequently?</li>
                            <li>How efficient are departments in terms of revenue and collection rates?</li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: ERD */}
                <section id="erd">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Database className="w-8 h-8 text-green-500" />
                        Entity-Relationship Diagram
                    </h2>
                    <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                        <Image
                            src="/portfolio/sunrise-erd.png"
                            alt="Sunrise Hospital ERD showing 7 tables: Department, Doctor, Patient, Appointment, Diagnosis, Appointment_Diagnosis, and Billing"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="mt-6 prose prose-neutral dark:prose-invert max-w-none">
                        <h3>Key Modeling Decisions</h3>
                        <ul>
                            <li>Each <strong>Doctor</strong> belongs to exactly one <strong>Department</strong>.</li>
                            <li><strong>Patients</strong> may optionally have an insurance plan.</li>
                            <li>Only <strong>Completed</strong> appointments have visit durations and billing records.</li>
                            <li><strong>Diagnoses ↔ Appointments</strong> is a many-to-many relationship via associative entity.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 3: SQL Lab */}
                <section id="sql">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <Code className="w-8 h-8 text-purple-500" />
                        SQL Implementation Lab
                    </h2>

                    <div className="space-y-6">
                        <SQLBlock
                            title="1. Create Department Table"
                            code={`CREATE TABLE Department (
  Dept_ID SERIAL PRIMARY KEY,
  dept_name VARCHAR(100) NOT NULL UNIQUE
);`}
                        />

                        <SQLBlock
                            title="2. Create Doctor Table"
                            code={`CREATE TABLE Doctor (
  Doctor_ID SERIAL PRIMARY KEY,
  d_fname VARCHAR(50) NOT NULL,
  d_lname VARCHAR(50) NOT NULL,
  Dept_ID INT NOT NULL,
  FOREIGN KEY (Dept_ID) REFERENCES Department(Dept_ID)
);`}
                        />

                        <SQLBlock
                            title="3. Create Patient Table"
                            code={`CREATE TABLE Patient (
  Patient_ID SERIAL PRIMARY KEY,
  P_fname VARCHAR(50) NOT NULL,
  P_lname VARCHAR(50) NOT NULL,
  DOB DATE NOT NULL,
  Sex CHAR(1) NOT NULL CHECK (Sex IN ('M', 'F')),
  Phone VARCHAR(15),
  Email VARCHAR(75),
  Insurance_Plan VARCHAR NULL
);`}
                        />

                        <SQLBlock
                            title="4. Create Appointment Table"
                            code={`CREATE TABLE Appointment (
  Apmt_ID SERIAL PRIMARY KEY,
  Start_Time TIMESTAMP NOT NULL,
  Status VARCHAR(20) NOT NULL
    CHECK (Status IN ('Scheduled','Completed','No-Show','Cancelled')),
  Duration_Min INT NULL,
  Patient_ID INT NOT NULL REFERENCES Patient(Patient_ID),
  Doctor_ID INT NOT NULL REFERENCES Doctor(Doctor_ID),
  -- Business Rule: Duration only for Completed
  CONSTRAINT appointment_duration_chk CHECK (
    (Status = 'Completed' AND Duration_Min IS NOT NULL)
    OR (Status <> 'Completed' AND Duration_Min IS NULL)
  )
);`}
                        />

                        <SQLBlock
                            title="5. Sanity Check: Row Counts"
                            code={`SELECT 'Department' AS table_name, COUNT(*) FROM Department
UNION ALL SELECT 'Doctor', COUNT(*) FROM Doctor
UNION ALL SELECT 'Patient', COUNT(*) FROM Patient
UNION ALL SELECT 'Appointment', COUNT(*) FROM Appointment
UNION ALL SELECT 'Diagnosis', COUNT(*) FROM Diagnosis
UNION ALL SELECT 'Billing', COUNT(*) FROM Billing;`}
                        />
                    </div>
                </section>

                {/* Section 4: Python Data Generation */}
                <section id="python">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <FileCode className="w-8 h-8 text-yellow-500" />
                        Python Data Generation
                    </h2>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-2xl mb-4">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                            <strong>▶️ Try it yourself!</strong> Click "Run" to generate synthetic hospital data. The code creates CSV files for Doctors, Patients, Appointments, and Billing.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                        <iframe
                            src="https://trinket.io/embed/python3/b91dfff67063"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ background: "#1e1e1e" }}
                            title="Hospital Data Generator - Python"
                            loading="lazy"
                            tabIndex={-1}
                        />
                    </div>
                    <p className="text-sm text-neutral-500 mt-4">
                        This script generates ~20,000 appointment records with realistic status distributions and timestamps.
                    </p>
                </section>

                {/* Section 5: Dashboard */}
                <section id="dashboard">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-blue-500" />
                        Interactive Tableau Dashboard
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                        Explore the live dashboard below — filter by department, diagnosis, or status. This is the actual Tableau visualization published to Tableau Public.
                    </p>

                    {/* Live Tableau Embed */}
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white mb-8">
                        <iframe
                            src="https://public.tableau.com/views/testtabbook/SunshineHospitalDB?:embed=y&:display_count=yes&:showVizHome=no"
                            width="100%"
                            height="800"
                            frameBorder="0"
                            title="Sunshine Hospital Performance Dashboard"
                            className="bg-white"
                            loading="lazy"
                            tabIndex={-1}
                        />
                    </div>

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <StatCard label="Total Appointments" value="20,000" />
                        <StatCard label="Collection Rate" value="49.83%" />
                        <StatCard label="Revenue" value="$1.49M" />
                        <StatCard label="Outstanding" value="$748K" />
                    </div>
                </section>

                {/* Section 6: Key Findings */}
                <section id="findings" className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-neutral-900 dark:to-neutral-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        💡 Key Findings & Recommendations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FindingCard
                            number={1}
                            title="Reduce No-Show Rates"
                            description="Implement SMS reminders and rescheduling prompts. Even a 5% reduction increases usable clinical capacity."
                        />
                        <FindingCard
                            number={2}
                            title="Balance Doctor Workloads"
                            description="Top doctors have 2x the workload. Rebalancing prevents burnout and improves care quality."
                        />
                        <FindingCard
                            number={3}
                            title="Improve Billing Collection"
                            description="49.83% collection rate means $748K outstanding. Streamline insurance verification."
                        />
                        <FindingCard
                            number={4}
                            title="Department Strategy"
                            description="Expand Cardiology (high efficiency). Audit Oncology's billing. Optimize Neurology resources."
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}

function SQLBlock({ title, code }: { title: string; code: string }) {
    return (
        <div className="bg-neutral-900 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 bg-neutral-800 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-300">{title}</span>
                <span className="text-xs text-neutral-500">PostgreSQL</span>
            </div>
            <pre className="p-4 text-sm text-green-400 overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );
}

function FindingCard({ number, title, description }: { number: number; title: string; description: string }) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">
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

function StatCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</p>
            <p className="text-sm text-neutral-500">{label}</p>
        </div>
    );
}
