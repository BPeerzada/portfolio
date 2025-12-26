"use client";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    ZAxis,
} from "recharts";

// Chart 1: Monthly Appointments
const monthlyAppointments = [
    { month: "Jan 23", count: 520, avg: 556 },
    { month: "Apr 23", count: 580, avg: 556 },
    { month: "Jul 23", count: 610, avg: 556 },
    { month: "Oct 23", count: 545, avg: 556 },
    { month: "Jan 24", count: 530, avg: 556 },
    { month: "Apr 24", count: 590, avg: 556 },
    { month: "Jul 24", count: 605, avg: 556 },
    { month: "Oct 24", count: 555, avg: 556 },
    { month: "Jan 25", count: 510, avg: 556 },
];

// Chart 2: No-Show vs Completed Rate
const appointmentRates = [
    { month: "Jan", noShow: 24.5, completed: 25.2 },
    { month: "Feb", noShow: 26.1, completed: 24.8 },
    { month: "Mar", noShow: 23.8, completed: 26.0 },
    { month: "Apr", noShow: 25.9, completed: 24.5 },
    { month: "May", noShow: 24.2, completed: 25.8 },
    { month: "Jun", noShow: 27.0, completed: 23.5 },
];

// Chart 3: Revenue vs Collections
const billingData = [
    { name: "Total Charges", value: 1490000 },
    { name: "Collections", value: 743000 },
    { name: "Outstanding", value: 748000 },
];

// Chart 4: Top Doctors Workload
const doctorWorkload = [
    { name: "Dr. Martin", scheduled: 65, completed: 55 },
    { name: "Dr. Chang", scheduled: 58, completed: 54 },
    { name: "Dr. Khan", scheduled: 60, completed: 52 },
    { name: "Dr. Patel", scheduled: 55, completed: 50 },
    { name: "Dr. Wilson", scheduled: 52, completed: 48 },
];

// Chart 5: Diagnosis Distribution
const diagnosisData = [
    { name: "Hypertension", value: 18, color: "#3b82f6" },
    { name: "Diabetes", value: 16, color: "#10b981" },
    { name: "Asthma", value: 14, color: "#f59e0b" },
    { name: "COVID-19", value: 12, color: "#ef4444" },
    { name: "Migraine", value: 10, color: "#8b5cf6" },
    { name: "Other", value: 30, color: "#6b7280" },
];

// Chart 6: Department Performance
const departmentData = [
    { name: "Cardiology", revenue: 320000, duration: 35, collection: 72, volume: 1200 },
    { name: "Radiology", revenue: 280000, duration: 25, collection: 65, volume: 1500 },
    { name: "Emergency", revenue: 450000, duration: 45, collection: 58, volume: 2000 },
    { name: "Oncology", revenue: 220000, duration: 55, collection: 45, volume: 800 },
    { name: "Neurology", revenue: 380000, duration: 50, collection: 62, volume: 900 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#6b7280"];

export function MonthlyAppointmentsChart() {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Monthly Appointments vs Average
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyAppointments}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                        labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} name="Appointments" />
                    <Line type="monotone" dataKey="avg" stroke="#ef4444" strokeDasharray="5 5" name="Average (556)" />
                </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-500 mt-4">
                <strong>Insight:</strong> Peaks during summer/winter suggest seasonal demand patterns.
            </p>
        </div>
    );
}

export function NoShowRateChart() {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                No-Show Rate vs Completed Rate
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={appointmentRates}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} unit="%" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="noShow" stroke="#ef4444" strokeWidth={2} name="No-Show %" />
                    <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="Completed %" />
                </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-500 mt-4">
                <strong>Insight:</strong> 25.2% avg no-show rate indicates wasted clinical capacity.
            </p>
        </div>
    );
}

export function BillingPerformanceChart() {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Revenue vs Collections
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={billingData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                    <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={100} />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                        formatter={(value) => value !== undefined ? [`$${(Number(value) / 1000).toFixed(0)}K`, ""] : ["", ""]}
                    />
                    <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-500 mt-4">
                <strong>Insight:</strong> Collection rate of 49.83% signals cash-flow challenges.
            </p>
        </div>
    );
}

export function DoctorWorkloadChart() {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Top 5 Doctors by Workload
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={doctorWorkload} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9ca3af" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={80} />
                    <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }} />
                    <Legend />
                    <Bar dataKey="scheduled" fill="#f59e0b" name="Scheduled" stackId="a" />
                    <Bar dataKey="completed" fill="#10b981" name="Completed" stackId="a" />
                </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-500 mt-4">
                <strong>Insight:</strong> Workload imbalance suggests burnout risk for top doctors.
            </p>
        </div>
    );
}

export function DiagnosisDistributionChart() {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Diagnosis Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={diagnosisData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        labelLine={false}
                    >
                        {diagnosisData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }} />
                </PieChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-500 mt-4">
                <strong>Insight:</strong> Diverse case-mix indicates strong departmental dependency.
            </p>
        </div>
    );
}

export function DepartmentPerformanceChart() {
    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Department Performance (Revenue vs Duration)
            </h3>
            <ResponsiveContainer width="100%" height={350}>
                <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="duration" name="Avg Duration" unit=" min" stroke="#9ca3af" fontSize={12} />
                    <YAxis dataKey="revenue" name="Revenue" stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                    <ZAxis dataKey="volume" range={[100, 1000]} name="Volume" />
                    <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                        formatter={(value, name) => {
                            if (value === undefined) return ["", name];
                            if (name === "Revenue") return [`$${(Number(value) / 1000).toFixed(0)}K`, name];
                            return [value, name];
                        }}
                    />
                    <Legend />
                    <Scatter name="Departments" data={departmentData} fill="#3b82f6">
                        {departmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4">
                {departmentData.map((dept, i) => (
                    <span key={dept.name} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: COLORS[i], color: "white" }}>
                        {dept.name}: {dept.collection}% collection
                    </span>
                ))}
            </div>
        </div>
    );
}
