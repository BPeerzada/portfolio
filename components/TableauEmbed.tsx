"use client";

import { useEffect, useRef } from "react";

interface TableauEmbedProps {
    vizUrl: string;
    height?: number;
}

export function TableauEmbed({ vizUrl, height = 800 }: TableauEmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Tableau JS API
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white">
            <div
                ref={containerRef}
                className="tableauPlaceholder"
                style={{ position: "relative", width: "100%", height: `${height}px` }}
            >
                <noscript>
                    <a href="#">
                        <img
                            alt="Sunshine Hospital Dashboard"
                            src="https://public.tableau.com/static/images/te/testtabbook/SunshineHospitalDB/1_rss.png"
                            style={{ border: "none" }}
                        />
                    </a>
                </noscript>
                <object
                    className="tableauViz"
                    style={{ display: "none", width: "100%", height: "100%" }}
                >
                    <param name="host_url" value="https://public.tableau.com/" />
                    <param name="embed_code_version" value="3" />
                    <param name="site_root" value="" />
                    <param name="name" value={vizUrl} />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                    <param
                        name="static_image"
                        value="https://public.tableau.com/static/images/te/testtabbook/SunshineHospitalDB/1.png"
                    />
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
