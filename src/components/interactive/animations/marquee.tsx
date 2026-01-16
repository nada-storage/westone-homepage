import React from 'react';
import { motion } from 'framer-motion';

const defaultBrands = [
    "Flutter", "Vite", "Express", "Next.js", "Unity", "OpenAI", "Figma", "AWS", "OCI"
];

interface MarqueeProps {
    items?: string[];
    text?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, text }) => {
    let displayItems: string[] = defaultBrands;

    if (items && items.length > 0) {
        displayItems = items;
    } else if (text) {
        displayItems = [text];
    }

    // Determine how many times to repeat to ensure it fills screen
    // Simple heuristic: if fewer items, repeat more.
    let repeatCount = 4;
    if (displayItems.length < 5) repeatCount = 12;

    const repeatedItems = Array(repeatCount).fill(displayItems).flat();

    return (
        <section className="bg-black py-24 md:py-36 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 md:gap-32 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {/* Repeat list multiple times to ensure seamless loop on large screens */}
                    {repeatedItems.map((item, index) => (
                        <span key={index} className="text-6xl md:text-9xl font-bold text-white serif opacity-90 cursor-default" data-hover="true">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Marquee;
