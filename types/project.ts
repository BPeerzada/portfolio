export interface Project {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    content: string;
    // Custom fields for the portfolio
    embedUrl?: string; // For Deepnote/Tableau
    githubUrl?: string;
}
