import React from 'react';
import type { Project } from '../../types';

interface ShowcaseDisplayProps {
    activeProject: Project | null;
}

export const ShowcaseDisplay: React.FC<ShowcaseDisplayProps> = ({ activeProject }) => {
    if (!activeProject || !activeProject.layoutConfig) return null;

    const isLight = activeProject.theme === 'light';
    const textColor = isLight ? 'text-white' : 'text-black';
    const subTextColor = isLight ? 'text-white/80' : 'text-black/80';
    const config = activeProject.layoutConfig;

    // Animation Class Mapping
    const getAnimClass = (type?: string, element?: 'title' | 'desc' | 'img') => {
        const base = type || 'fade-up';
        if (element === 'img') return `animate-${base}-img`;
        if (element === 'desc') return `animate-${base}-delay`;
        return `animate-${base}`;
    };

    return (
        // Main container handles overall safety
        <div className="absolute inset-0 z-20 pointer-events-none w-full h-full overflow-hidden">

            <div key={activeProject.id} className="relative w-full h-full">

                {/* --- IMAGE AREA --- */}
                {activeProject.foregroundImage && activeProject.foregroundType !== 'none' && (
                    <div className={`z-0 ${config.imageWrapperStyles} ${getAnimClass(config.enterAnimation, 'img')}`}>

                        {/* Mobile Mockup */}
                        {activeProject.foregroundType === 'mobile' && (
                            <div className="relative">
                                {/* Secondary (Background) Mockup - Rendered First to be Behind */}
                                {activeProject.secondaryImage && (
                                    <div
                                        className="absolute top-0 left-0 w-[280px] md:w-[340px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transition-transform duration-700 ease-out"
                                        style={{
                                            transform: 'translate(40%, 10%) rotate(12deg) scale(0.9)',
                                            opacity: 0.6,
                                            zIndex: -1
                                        }}
                                    >
                                        <div className="absolute top-0 w-full h-8 bg-black z-20 rounded-b-xl mb-2 flex justify-center">
                                            <div className="w-20 h-5 bg-black rounded-b-lg"></div>
                                        </div>
                                        <img
                                            src={activeProject.secondaryImage}
                                            alt="Secondary Mockup"
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                                    </div>
                                )}

                                {/* Main (Foreground) Mockup */}
                                <div className="relative w-[280px] md:w-[340px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden z-10">
                                    <div className="absolute top-0 w-full h-8 bg-black z-20 rounded-b-xl mb-2 flex justify-center">
                                        <div className="w-20 h-5 bg-black rounded-b-lg"></div>
                                    </div>
                                    <img
                                        src={activeProject.foregroundImage}
                                        alt="App Mockup"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/10 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        )}

                        {/* Desktop Mockup */}
                        {activeProject.foregroundType === 'desktop' && (
                            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl border-4 border-gray-800 shadow-2xl overflow-hidden">
                                <div className="w-full h-6 bg-gray-900 flex items-center px-4 space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <img
                                    src={activeProject.foregroundImage}
                                    alt="Desktop Mockup"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Plain Image Card (No Device Frame) */}
                        {activeProject.foregroundType === 'image' && (
                            <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src={activeProject.foregroundImage}
                                    alt="Project Visual"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                {/* Subtle inner border/glare */}
                                <div className="absolute inset-0 rounded-lg border border-white/10 pointer-events-none"></div>
                            </div>
                        )}
                    </div>
                )}

                {/* --- TITLE --- */}
                <div className={`z-10 ${config.titleStyles} ${getAnimClass(config.enterAnimation, 'title')}`}>
                    <h1
                        className={`font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight ${textColor}`}
                        style={{ textShadow: isLight ? '0 10px 40px rgba(0,0,0,0.3)' : 'none' }}
                    >
                        {activeProject.name}
                    </h1>
                </div>

                {/* --- DESCRIPTION & TAGS --- */}
                <div className={`z-10 ${config.descriptionStyles} ${getAnimClass(config.enterAnimation, 'desc')}`}>
                    <p
                        className={`text-lg md:text-xl font-medium leading-relaxed mb-4 ${subTextColor} whitespace-pre-line`}
                    >
                        {activeProject.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${config.descriptionStyles.includes('text-right') ? 'justify-end' : config.descriptionStyles.includes('text-center') ? 'justify-center' : 'justify-start'}`}>
                        {activeProject.tags.map((tag, i) => (
                            <span key={i} className={`text-xs font-bold uppercase tracking-widest px-3 py-1 border rounded-full ${isLight ? 'border-white/30 text-white/70' : 'border-black/20 text-black/60'}`}>
                                {tag.trim()}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
