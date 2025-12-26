import React from "react";

// Simple SVG icons for common data science tools
const icons: Record<string, React.ReactNode> = {
    sql: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 17v-2.34c1.22.86 3.29 1.48 6 1.48s4.78-.62 6-1.48V17c0 .5-2.13 2-6 2s-6-1.5-6-2zm0-4v-2.34c1.22.86 3.29 1.48 6 1.48s4.78-.62 6-1.48V13c0 .5-2.13 2-6 2s-6-1.5-6-2z" />
        </svg>
    ),
    postgresql: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 17v-2.34c1.22.86 3.29 1.48 6 1.48s4.78-.62 6-1.48V17c0 .5-2.13 2-6 2s-6-1.5-6-2zm0-4v-2.34c1.22.86 3.29 1.48 6 1.48s4.78-.62 6-1.48V13c0 .5-2.13 2-6 2s-6-1.5-6-2z" />
        </svg>
    ),
    python: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983L7.66 7.08h4.328v.73H6.497S4 7.509 4 12.07s2.173 4.401 2.173 4.401h1.296v-2.116s-.07-2.173 2.139-2.173l4.096.01s2.068.034 2.068-2.002V5.907s.315-2.173-4.084-2.173c-4.4 0-4.178 2.423-4.178 2.423v1.67h4.328v.73H7.647S4 8.266 4 12.826s2.173 4.401 2.173 4.401h1.296v-2.116s-.07-2.173 2.139-2.173h4.077s2.068.034 2.068-2.002V10.75" />
        </svg>
    ),
    tableau: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M11.654 5.168V3.846h-.66v1.322h-1.34v.645h1.34v1.323h.66V4.813h1.34v-.645h-1.34zm-5.478 4.163V7.499H5.52v1.832H3.714v.66H5.52v1.832h.656v-1.832H8.01v-.66H6.176zm14.304 0V7.499h-.66v1.832h-1.806v.66h1.806v1.832h.66v-1.832H22v-.66h-1.52zm-7.034 2.35v-2.49h-.66v2.49h-2.523v.66h2.523v2.503h.66v-2.503h2.523v-.66h-2.523zM6.176 19.163v-1.832H5.52v1.832H3.714v.66H5.52v1.823h.656v-1.823H8.01v-.66H6.176zm14.304 0v-1.832h-.66v1.832h-1.806v.66h1.806v1.823h.66v-1.823H22v-.66h-1.52zm-8.826-6.513V10.99h-.66v1.66H9.177v.66h1.817v1.66h.66v-1.66h1.817v-.66h-1.817zm0 8.837V19.83h-.66v1.657H9.177v.66h1.817V24h.66v-1.853h1.817v-.66h-1.817z" />
        </svg>
    ),
    excel: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M21.17 3H7.83A1.83 1.83 0 006 4.83v2.34H2.83A1.83 1.83 0 001 9v6a1.83 1.83 0 001.83 1.83H6v2.34A1.83 1.83 0 007.83 21h13.34A1.83 1.83 0 0023 19.17V4.83A1.83 1.83 0 0021.17 3zM6 15H3V9h3v6zm15 4.17H7.83V16.5h5.34V15H8V9h5.17v1.5H8.5v3.17h4.67V15h-.84v1.5h5.84v2.67z" />
        </svg>
    ),
    r: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H8v-2h3v2zm4.54-4.71l-1.42 1.42-2.12-2.12-2.12 2.12-1.42-1.42 2.12-2.12-2.12-2.12 1.42-1.42 2.12 2.12 2.12-2.12 1.42 1.42-2.12 2.12 2.12 2.12z" />
        </svg>
    ),
};

// Color mapping for each tech
const colors: Record<string, string> = {
    sql: "text-blue-500",
    postgresql: "text-blue-600",
    python: "text-yellow-500",
    tableau: "text-orange-500",
    excel: "text-green-600",
    r: "text-blue-400",
};

interface TechIconProps {
    name: string;
    showLabel?: boolean;
    className?: string;
}

export function TechIcon({ name, showLabel = false, className = "" }: TechIconProps) {
    const normalizedName = name.toLowerCase().replace(/\s+/g, "");
    const icon = icons[normalizedName];
    const colorClass = colors[normalizedName] || "text-neutral-500";

    if (!icon) {
        // Fallback to text badge if no icon exists
        return (
            <span className={`text-xs font-medium uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded ${className}`}>
                {name}
            </span>
        );
    }

    return (
        <div className={`flex items-center gap-1.5 ${className}`} title={name}>
            <span className={colorClass}>{icon}</span>
            {showLabel && <span className="text-xs text-neutral-600 dark:text-neutral-400">{name}</span>}
        </div>
    );
}

export function TechIconRow({ tags }: { tags: string[] }) {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            {tags.map((tag) => (
                <TechIcon key={tag} name={tag} />
            ))}
        </div>
    );
}
