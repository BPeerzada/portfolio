"use client";

import { useEffect, useRef } from "react";

interface TableauEmbedProps {
    vizUrl: string;
    staticImage?: string;
    height?: number;
}

export function TableauEmbed({ vizUrl, staticImage, height = 800 }: TableauEmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Tableau JS API logic
        const divElement = containerRef.current;
        const vizElement = divElement?.getElementsByTagName('object')[0];

        if (divElement && vizElement) {
            const updateSize = () => {
                const width = divElement.offsetWidth;
                if (width > 800) {
                    vizElement.style.width = '100%';
                    vizElement.style.height = (width * 0.75) + 'px';
                } else if (width > 500) {
                    vizElement.style.width = '100%';
                    vizElement.style.height = (width * 0.75) + 'px';
                } else {
                    vizElement.style.width = '100%';
                    vizElement.style.height = '1400px'; // Fallback for mobile
                }
            };

            // Initial size set
            updateSize();
            // Optional: Listen to window resize if we want it strictly responsive like the script implies
            window.addEventListener('resize', updateSize);

            return () => window.removeEventListener('resize', updateSize);
        }
    }, [vizUrl]); // dependency on vizUrl to re-trigger if url changes

    useEffect(() => {
        // Load Tableau JS API
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup schema if needed, but usually scripts pile up fine
            // We avoid removing it aggressively to not break other embeds
        };
    }, []);

    return (
        <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white">
            <div
                ref={containerRef}
                className="tableauPlaceholder"
                style={{ position: "relative", width: "100%" }} // Removed fixed height here, let JS handle it
            >
                <noscript>
                    <a href="#">
                        <img
                            alt="Tableau Dashboard"
                            src={staticImage}
                            style={{ border: "none" }}
                        />
                    </a>
                </noscript>
                <object
                    className="tableauViz"
                    style={{ display: "none" }}
                >
                    <param name="host_url" value="https://public.tableau.com/" />
                    <param name="embed_code_version" value="3" />
                    <param name="site_root" value="" />
                    <param name="name" value={vizUrl} />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                    {staticImage && <param
                        name="static_image"
                        value={staticImage}
                    />}
                    <param name="animate_transition" value="yes" />
                    <param name="display_static_image" value="yes" />
                    <param name="display_spinner" value="yes" />
                    <param name="display_overlay" value="yes" />
                    <param name="display_count" value="yes" />
                    <param name="language" value="en-US" />
                </object>
            </div>
        </div>
    );
}
