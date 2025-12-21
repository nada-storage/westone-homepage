import React from 'react';
import type { Project } from '../../types';

interface ShowcaseBackgroundProps {
    projects: Project[];
    activeId: string | null;
}

export const ShowcaseBackground: React.FC<ShowcaseBackgroundProps> = ({ projects, activeId }) => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${project.id === activeId ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* The Background Image */}
                    {project.bgImage && (
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10s]"
                            style={{
                                backgroundImage: `url(${project.bgImage})`,
                            }}
                        />
                    )}

                    {/* Overlay for readability - slight adjustment per theme could be added here */}
                    <div className={`absolute inset-0 ${project.theme === 'light' ? 'bg-black/40' : 'bg-white/10'}`} />

                    {/* Grain texture overlay for that premium feel */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />
                </div>
            ))}
        </div>
    );
};
