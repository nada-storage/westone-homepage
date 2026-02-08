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
                    <div className={`z-0 ${config.imageWrapperStyles} ${activeProject.foregroundType === 'tablet' ? 'animate-soft-drop-img' : getAnimClass(config.enterAnimation, 'img')}`}>

                        {/* Mobile Mockup */}
                        {activeProject.foregroundType === 'mobile' && (
                            <div className="relative">
                                {/* Triple Phone Layout */}
                                {activeProject.showcaseImages && activeProject.showcaseImages.length >= 3 ? (
                                    <div className="flex items-center -space-x-8 md:-space-x-12">
                                        {activeProject.showcaseImages.map((img, index) => (
                                            <div
                                                key={index}
                                                className="relative w-[180px] md:w-[220px] aspect-[9/19] bg-black rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden transition-transform duration-700 ease-out"
                                                style={{ zIndex: index === 1 ? 10 : 5 - Math.abs(index - 1), transform: index === 1 ? 'scale(1.05)' : 'scale(0.95)' }}
                                            >
                                                <div className="absolute top-0 w-full h-6 bg-black z-20 rounded-b-xl flex justify-center">
                                                    <div className="w-16 h-4 bg-black rounded-b-lg"></div>
                                                </div>
                                                <img src={img} alt={`Mockup ${index + 1}`} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/5 to-transparent pointer-events-none" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        {/* Secondary (Background) Mockup - Rendered First to be Behind */}
                                        {activeProject.secondaryImage && (
                                            <div
                                                className="absolute top-0 left-0 w-[280px] md:w-[340px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transition-transform duration-700 ease-out"
                                                style={{
                                                    transform: 'translate(40%, 10%) rotate(12deg) scale(0.9)',
                                                    zIndex: -1
                                                }}
                                            >
                                                <div className="absolute top-0 w-full h-8 bg-black z-20 rounded-b-xl mb-2 flex justify-center">
                                                    <div className="w-20 h-5 bg-black rounded-b-lg"></div>
                                                </div>
                                                <img
                                                    src={activeProject.secondaryImage}
                                                    alt="Secondary Mockup"
                                                    className="w-full h-full object-cover blur-[2px]"
                                                />
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
                                    </>
                                )}
                            </div>
                        )}

                        {/* Tablet Mockup */}
                        {activeProject.foregroundType === 'tablet' && (
                            <div className="relative">
                                {/* Secondary (Background) Tablet */}
                                {activeProject.secondaryImage && (
                                    <div
                                        className="absolute top-0 left-0 w-[380px] md:w-[500px] aspect-[4/3] bg-black rounded-[1.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden transition-transform duration-700 ease-out"
                                        style={{
                                            transform: 'translate(40%, -15%) rotate(6deg) scale(0.9)',
                                            zIndex: -1
                                        }}
                                    >
                                        <img
                                            src={activeProject.secondaryImage}
                                            alt="Secondary Tablet"
                                            className="w-full h-full object-cover blur-[1px]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/5 to-transparent pointer-events-none" />
                                    </div>
                                )}

                                {/* Main (Foreground) Tablet */}
                                <div className="relative w-[380px] md:w-[500px] aspect-[4/3] bg-black rounded-[1.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden z-10">
                                    <img
                                        src={activeProject.foregroundImage}
                                        alt="Tablet Mockup"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/10 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        )}

                        {/* Desktop Mockup */}
                        {activeProject.foregroundType === 'desktop' && (
                            <div className={`relative w-full max-w-5xl ${config.aspectRatio || 'aspect-video'} bg-black rounded-xl border-4 border-gray-800 shadow-2xl overflow-hidden`}>
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

                {/* --- SCATTERED PHOTOS (Tablet only) --- */}
                {activeProject.foregroundType === 'tablet' && activeProject.showcaseImages && activeProject.showcaseImages.length >= 3 && (
                    <div className="z-5 absolute top-[58%] left-[21%] animate-pop-in-img">
                        <div className="relative w-[500px] h-[280px]">
                            <div className="absolute top-0 left-0 w-[140px] md:w-[160px] rounded-xl overflow-hidden shadow-lg rotate-[-4deg] opacity-90">
                                <img src={activeProject.showcaseImages[0]} alt="Photo 1" className="w-full h-full object-cover aspect-[4/3]" />
                            </div>
                            <div className="absolute top-[20px] left-[170px] md:left-[180px] w-[130px] md:w-[150px] rounded-xl overflow-hidden shadow-lg rotate-[3deg] opacity-85">
                                <img src={activeProject.showcaseImages[1]} alt="Photo 2" className="w-full h-full object-cover aspect-[3/4]" />
                            </div>
                            <div className="absolute top-[10px] left-[310px] md:left-[340px] w-[120px] md:w-[140px] rounded-xl overflow-hidden shadow-lg rotate-[-2deg] opacity-80">
                                <img src={activeProject.showcaseImages[2]} alt="Photo 3" className="w-full h-full object-cover aspect-[4/3]" />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TITLE --- */}
                <div className={`z-10 ${config.titleStyles} ${activeProject.foregroundType === 'tablet' ? 'animate-converge' : getAnimClass(config.enterAnimation, 'title')}`}>
                    <h1
                        className={`font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight ${textColor}`}
                        style={{ textShadow: isLight ? '0 10px 40px rgba(0,0,0,0.3)' : 'none' }}
                    >
                        {activeProject.name}
                    </h1>
                </div>

                {/* --- DESCRIPTION & TAGS --- */}
                <div className={`z-10 ${config.descriptionStyles} ${activeProject.foregroundType === 'tablet' ? 'animate-cross-fade-delay' : getAnimClass(config.enterAnimation, 'desc')}`}>
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
