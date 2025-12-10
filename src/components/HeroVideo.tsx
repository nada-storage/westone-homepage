import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const HeroVideo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { setCursorType } = useCursor();

    return (
        <section className="w-full py-24 md:py-32 bg-black text-white overflow-hidden flex flex-col items-center justify-center">

            {/* Title - Outside the image, interactive entrance */}
            <div className="w-full max-w-[90%] md:max-w-7xl px-4 md:px-12 mb-12 md:mb-16 z-10 relative">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] md:leading-[0.85] tracking-tight text-center md:text-left"
                >
                    We used a product <br />
                    <span className="text-gray-500 italic block mt-2 md:mt-0">we've built.</span>
                </motion.h1>
            </div>

            {/* Video Container - Horizontal Expansion on Hover */}
            <motion.div
                className="relative z-0 overflow-hidden"
                // Initial width matches roughly a container, animates to full width
                // We use vw to ensure we break out of parent constraints if any
                animate={{
                    width: isHovered ? "100%" : "85%",
                    borderRadius: isHovered ? 0 : 12,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ aspectRatio: 16 / 9 }}
                onMouseEnter={() => {
                    setIsHovered(true);
                    setCursorType('play');
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setCursorType('default');
                }}
                data-hover="true"
            >
                <div className="w-full h-full relative bg-gray-900">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
                        poster="https://picsum.photos/1920/1080?grayscale"
                    />
                    {/* Subtle overlay that vanishes on hover */}
                    <motion.div
                        className="absolute inset-0 bg-black/20 pointer-events-none"
                        animate={{ opacity: isHovered ? 0 : 0.4 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </motion.div>

            {/* Bottom Description - Interactive reveal */}
            <div className="w-full max-w-[90%] md:max-w-7xl px-4 md:px-12 mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="hidden md:block md:col-span-4">
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-[1px] bg-gray-700 mb-4 w-12"
                    />
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xs font-mono text-gray-500 uppercase tracking-widest block"
                    >
                        Est. 2006 — San Francisco
                    </motion.span>
                </div>
                <div className="md:col-span-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-3xl font-light text-gray-300 leading-relaxed"
                    >
                        Since 2006, we've helped shape the technology landscape building breakthrough products.
                    </motion.p>
                </div>
            </div>

        </section>
    );
};

export default HeroVideo;
