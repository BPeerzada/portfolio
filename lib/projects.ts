import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Project } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "_projects");

export function getAllProjects(): Project[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(projectsDirectory)) {
        fs.mkdirSync(projectsDirectory);
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Validate data or provide defaults
        return {
            slug,
            content: matterResult.content,
            title: matterResult.data.title || "Untitled Project",
            description: matterResult.data.description || "",
            date: matterResult.data.date || new Date().toISOString(),
            tags: matterResult.data.tags || [],
            embedUrl: matterResult.data.embedUrl || null,
            githubUrl: matterResult.data.githubUrl || null,
            ...matterResult.data,
        } as Project;
    });

    // Sort projects by date
    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getProjectData(slug: string): Promise<Project> {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        content: contentHtml,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
        tags: matterResult.data.tags || [],
        embedUrl: matterResult.data.embedUrl || null,
        githubUrl: matterResult.data.githubUrl || null,
        ...matterResult.data,
    } as Project;
}
