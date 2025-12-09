import React from 'react';

export const Marquee: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="relative flex overflow-hidden py-12 md:py-24 bg-black border-y border-white/10">
            {/* Gradient fade on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

            <div className="animate-marquee whitespace-nowrap flex items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
                <span className="text-[80px] md:text-[140px] font-serif italic leading-none mx-8 text-neutral-800">
                    {text}
                </span>
                <span className="text-[80px] md:text-[140px] font-serif leading-none mx-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                    {text}
                </span>
                <span className="text-[80px] md:text-[140px] font-serif italic leading-none mx-8 text-neutral-800">
                    {text}
                </span>
                <span className="text-[80px] md:text-[140px] font-serif leading-none mx-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                    {text}
                </span>
            </div>

            <div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center opacity-80 hover:opacity-100 transition-opacity duration-500" aria-hidden="true" style={{ left: '100%' }}>
                <span className="text-[80px] md:text-[140px] font-serif italic leading-none mx-8 text-neutral-800">
                    {text}
                </span>
                <span className="text-[80px] md:text-[140px] font-serif leading-none mx-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                    {text}
                </span>
                <span className="text-[80px] md:text-[140px] font-serif italic leading-none mx-8 text-neutral-800">
                    {text}
                </span>
                <span className="text-[80px] md:text-[140px] font-serif leading-none mx-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                    {text}
                </span>
            </div>
        </div>
    );
};
