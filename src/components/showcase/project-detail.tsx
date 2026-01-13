import React, { useState } from 'react';
import { DetailHeader } from "@/components/layout";
import { ScrollReveal } from "@/components/interactive/scroll";
import { Marquee } from "@/components/interactive/animations";
import { ImageCarousel } from '@/components/interactive/carousel';
import { Play, Mic, ArrowUpRight, Loader2, Pause, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectDetailContent } from '../../types';
import type { Project } from '../../types';

interface ProjectDetailProps {
    details: ProjectDetailContent;
    nextProject: Project;
    onNextProject: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ details, nextProject, onNextProject }) => {
    // State for Genre Interaction (Kept as is for structure/demo retention)
    const [activeGenre, setActiveGenre] = useState<'Jazz' | 'Lo-Fi' | 'Synth'>('Lo-Fi');

    // State for Song Creation Interaction (Kept as is)
    const [isGenerating, setIsGenerating] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);

    const handleGenerate = () => {
        if (isGenerating || hasGenerated) return;
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setHasGenerated(true);
        }, 2000);
    };

    const genreConfig = {
        'Jazz': {
            img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2070&auto=format&fit=crop', // Jazz Club
            gradient: 'from-indigo-900/80',
            progressColor: 'bg-indigo-500'
        },
        'Lo-Fi': {
            img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop', // Cozy Indoor
            gradient: 'from-orange-900/80',
            progressColor: 'bg-orange-500'
        },
        'Synth': {
            img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop', // Neon Synth
            gradient: 'from-fuchsia-900/80',
            progressColor: 'bg-fuchsia-500'
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white pb-0 relative z-40 w-full"
        >

            {/* Header & Hero Image */}
            <DetailHeader
                title={details.hero.title}
                type={details.hero.type}
                stage={details.hero.stage}
                deliverables={details.hero.deliverables}
            />

            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <img
                    src={details.media.hero}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Introduction */}
            <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <span className="block text-sm font-semibold uppercase tracking-wider mb-8 text-purple-400">Introduction</span>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif leading-[1.1] md:leading-[1.1] max-w-5xl text-white/90">
                        {details.intro.text}
                    </h2>
                </ScrollReveal>
            </section>

            {/* The Vision - Grid Layout */}
            <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="md:col-span-4 sticky top-32">
                        <ScrollReveal>
                            <span className="block text-sm font-semibold uppercase tracking-wider mb-6 text-gray-400">The Vision</span>
                            <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
                                {details.vision.heading}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {details.vision.text}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="md:col-span-8 space-y-8">
                        <ScrollReveal>
                            <div className="relative aspect-[9/16] md:aspect-[16/10] bg-neutral-900 rounded-lg overflow-hidden group">
                                <img
                                    src={details.media.visionMain}
                                    alt="Interface"
                                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-gray-300 mb-1">{details.vision.image1Subtitle}</div>
                                            <div className="text-xl font-serif">{details.vision.image1Title}</div>
                                        </div>
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                                            <Play className="fill-black ml-1 w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal delay={100}>
                                <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden relative group">
                                    <img src={details.media.visionGrid1} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt="Detail 1" />
                                    <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden relative group">
                                    <img src={details.media.visionGrid2} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt="Detail 2" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="font-serif italic text-2xl">{details.vision.image3HoverText}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Middle Marquee */}
            <section className="py-12">
                <Marquee text={details.marquee} />
            </section>

            {/* Aura of Music - Darker Section */}
            <section className="py-32 px-6 md:px-12 bg-neutral-900">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                            <div>
                                <span className="block text-sm font-semibold uppercase tracking-wider mb-6 text-gray-400">{details.aura.subheading}</span>
                                <h3 className="text-3xl md:text-5xl font-serif">
                                    {details.aura.heading}
                                </h3>
                            </div>
                            <p className="text-gray-400 text-lg">
                                {details.aura.text}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[800px]">
                        <ScrollReveal className="h-full">
                            <div className="w-full h-full min-h-[400px] bg-neutral-800 rounded-lg overflow-hidden relative group">
                                <img src={details.media.auraBento} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" alt="Moodboard" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h4 className="font-serif text-8xl text-white/10 group-hover:text-white/30 transition-colors duration-500">{details.aura.bigText}</h4>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="flex flex-col gap-6 h-full">
                            <ScrollReveal delay={100} className="flex-1">
                                {/* Interactive Genre Widget (Preserved) */}
                                <div className="w-full h-full bg-[#111] rounded-lg p-8 flex flex-col justify-between border border-white/5 hover:border-white/20 transition-colors relative overflow-hidden group">
                                    {/* Dynamic Background Image */}
                                    <img
                                        key={activeGenre}
                                        src={genreConfig[activeGenre].img}
                                        alt={activeGenre}
                                        className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500 ease-in-out group-hover:opacity-40 animate-in fade-in zoom-in-105 duration-700"
                                    />
                                    {/* Dynamic Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${genreConfig[activeGenre].gradient} to-black/90 transition-all duration-500`}></div>

                                    <div className="relative z-10 flex flex-wrap gap-2">
                                        {(['Jazz', 'Lo-Fi', 'Synth'] as const).map((genre) => (
                                            <button
                                                key={genre}
                                                onClick={() => setActiveGenre(genre)}
                                                className={`px-4 py-2 rounded-full border border-white/20 text-sm transition-all duration-300 ${activeGenre === genre
                                                    ? 'bg-white text-black font-medium scale-105'
                                                    : 'hover:bg-white/10 text-gray-300'
                                                    }`}
                                            >
                                                {genre}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between text-xs text-gray-300 mb-2">
                                            <span>Generating {activeGenre} Vibe...</span>
                                            <span>Processing</span>
                                        </div>
                                        <div className="h-1 w-full bg-black/40 backdrop-blur-sm rounded-full overflow-hidden">
                                            <div className={`h-full w-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full`}></div>
                                            <div className={`h-full w-[85%] ${genreConfig[activeGenre].progressColor} absolute top-0 left-0 transition-all duration-500`}></div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={200} className="flex-1">
                                <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-black rounded-lg p-8 relative overflow-hidden group">
                                    <img src={details.media.auraCard} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" alt="Texture" />
                                    <div className="relative z-10 h-full flex items-center justify-center text-center">
                                        <h5 className="font-serif text-4xl italic leading-tight" dangerouslySetInnerHTML={{ __html: details.aura.card2Text }}></h5>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Song Creation / Feature Section */}
            <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <ScrollReveal>
                            <div className="relative w-full max-w-md mx-auto aspect-[9/18] bg-black border-4 border-neutral-800 rounded-[3rem] overflow-hidden shadow-2xl shadow-purple-900/20">
                                {/* Mobile Screen Mockup */}
                                <div className="absolute inset-0 bg-neutral-900 flex flex-col">
                                    {/* Background Image - Changes on Generate */}
                                    <div className="absolute inset-0 transition-opacity duration-1000">
                                        <img
                                            src={hasGenerated
                                                ? details.media.featureResult // Result Image (Vibrant Club)
                                                : details.media.featureInit // Initial Image (Abstract)
                                            }
                                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${hasGenerated ? 'opacity-100' : 'opacity-40 mix-blend-overlay'
                                                }`}
                                            alt="Background"
                                        />
                                    </div>

                                    {/* Content UI (Preserved Interaction) */}
                                    <div className="relative z-10 flex-1 p-8 flex flex-col justify-end pb-24 space-y-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                        {!hasGenerated ? (
                                            <>
                                                <div className="text-center mb-4 transition-all duration-500">
                                                    <h4 className="text-3xl font-serif mb-2 text-white">Welcome</h4>
                                                    <p className="text-sm text-gray-400">Start creating.</p>
                                                </div>

                                                <div className="space-y-3 transition-all duration-500">
                                                    <div className="h-14 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center px-4 gap-3 text-gray-400">
                                                        <Mic className="w-5 h-5" />
                                                        <span>A cyber-noir jazz track...</span>
                                                    </div>
                                                    <button
                                                        onClick={handleGenerate}
                                                        disabled={isGenerating}
                                                        className="w-full h-14 bg-white text-black rounded-2xl font-bold text-sm shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        {isGenerating ? (
                                                            <><Loader2 className="w-4 h-4 animate-spin" /> Creating...</>
                                                        ) : (
                                                            "Generate"
                                                        )}
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="animate-in slide-in-from-bottom-10 fade-in duration-700">
                                                {/* Result Player UI */}
                                                <div className="aspect-square bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 mb-6 p-4 shadow-2xl relative overflow-hidden group">
                                                    <img
                                                        src={details.media.featureResult}
                                                        className="w-full h-full object-cover rounded-xl"
                                                        alt="Album Art"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Pause className="w-12 h-12 text-white fill-white" />
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <h4 className="text-2xl font-serif text-white mb-1">Cyber Noir Jazz</h4>
                                                    <p className="text-gray-400 text-sm">Generated</p>
                                                </div>

                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => setHasGenerated(false)} // Reset
                                                        className="flex-1 h-12 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                                    >
                                                        Create New
                                                    </button>
                                                    <button className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center text-white hover:bg-purple-400 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                                        <ArrowRight className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="order-1 lg:order-2">
                        <ScrollReveal>
                            <span className="block text-sm font-semibold uppercase tracking-wider mb-6 text-gray-400">{details.feature.subheading}</span>
                            <h3 className="text-4xl md:text-6xl font-serif mb-8">
                                {details.feature.heading}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                {details.feature.text}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Discovery Section - Large Visuals (Image Carousel) */}
            <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
                    <ScrollReveal>
                        <span className="block text-sm font-semibold uppercase tracking-wider mb-6 text-gray-400">Discovery</span>
                        <h3 className="text-3xl md:text-5xl font-serif max-w-2xl">
                            {details.discovery.heading}
                        </h3>
                    </ScrollReveal>
                </div>

                <ImageCarousel
                    items={details.discovery.items}
                />
            </section>

            {/* Stats / Impact Section */}
            <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <h3 className="text-3xl font-serif mb-24">Immediate disruption</h3>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                    <ScrollReveal delay={0}>
                        <div className="space-y-4 group">
                            <span className="text-gray-500 text-sm font-mono block mb-8">01</span>
                            <div className="text-6xl md:text-8xl font-serif group-hover:text-purple-400 transition-colors duration-500">{details.stats.stat1.value}</div>
                            <p className="text-gray-400 border-l border-white/20 pl-4 mt-8">{details.stats.stat1.label}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="space-y-4 group">
                            <span className="text-gray-500 text-sm font-mono block mb-8">02</span>
                            <div className="text-6xl md:text-8xl font-serif group-hover:text-purple-400 transition-colors duration-500">{details.stats.stat2.value}</div>
                            <p className="text-gray-400 border-l border-white/20 pl-4 mt-8">{details.stats.stat2.label}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <div className="space-y-4 group">
                            <span className="text-gray-500 text-sm font-mono block mb-8">03</span>
                            <div className="text-6xl md:text-8xl font-serif group-hover:text-purple-400 transition-colors duration-500">{details.stats.stat3.value}</div>
                            <p className="text-gray-400 border-l border-white/20 pl-4 mt-8">{details.stats.stat3.label}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* NEXT CASE FOOTER */}
            <section className="relative h-[80vh] w-full bg-neutral-900 border-t border-white/10 overflow-hidden group">
                {/* Background Image that reveals on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out z-0">
                    <img
                        src={nextProject.image}
                        alt="Next Case"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                    />
                </div>
                <div className="absolute inset-0 bg-black/60 z-1 pointer-events-none"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center cursor-pointer" onClick={onNextProject}>
                    <span className="text-sm font-mono text-gray-500 mb-8 tracking-widest uppercase group-hover:text-white transition-colors">Next Case Study</span>
                    <h2 className="text-[10vw] font-serif leading-none mb-4 group-hover:tracking-wide transition-all duration-700">
                        {nextProject.name}
                    </h2>
                    <div className="flex items-center gap-4 text-xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>

                {/* Standard Footer Links inside the Next Case area */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end z-30 mix-blend-difference text-white">
                    <div className="text-sm text-gray-400">
                        &copy; 2024 Metalab Clone.
                    </div>
                    <div className="flex gap-6 text-sm">
                        <button className="hover:text-white/70 transition-colors">Instagram</button>
                        <button className="hover:text-white/70 transition-colors">Twitter</button>
                    </div>
                </div>
            </section>

        </motion.div>
    );
};
