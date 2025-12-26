import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Burhan<span className="text-blue-600">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
                        Work
                    </Link>
                    <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
                        About
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/bpeerzada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/budpeer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-[#0077b5] transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:bpeerzada@usf.edu"
                        className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
}
