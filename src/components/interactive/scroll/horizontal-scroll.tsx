import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, MotionValue, animate } from 'framer-motion';

const baseItems = [
    { id: 1, img: "https://picsum.photos/600/800?random=1", title: "Dashboards" },
    { id: 2, img: "https://picsum.photos/800/600?random=2", title: "Web Apps" },
    { id: 3, img: "https://picsum.photos/600/800?random=3", title: "Interfaces" },
    { id: 4, img: "https://picsum.photos/800/600?random=4", title: "Mobile" },
    { id: 5, img: "https://picsum.photos/600/800?random=5", title: "AI" },
    { id: 6, img: "https://picsum.photos/800/600?random=6", title: "Server" },
    { id: 7, img: "https://picsum.photos/600/800?random=7", title: "Design Systems" },
];

interface ScrollItemProps {
    item: any;
    index: number;
    x: MotionValue<number>;
    itemWidth: number;
    gap: number;
    totalCount: number;
}

const ScrollItem: React.FC<ScrollItemProps> = ({ item, index, x, itemWidth, gap, totalCount }) => {
    const totalItemWidth = itemWidth + gap;
    const trackWidth = totalCount * totalItemWidth;
    const baseOffset = index * totalItemWidth;

    const xPos = useTransform(x, (latestX) => {
        // 1. Position relative to drag/scroll
        let pos = baseOffset + latestX;

        // 2. Center the coordinate system around the "track"
        pos -= (trackWidth / 2);

        // 3. Infinite Wrap
        const min = -trackWidth / 2;
        const max = trackWidth / 2;
        const range = max - min;

        const wrappedPos = ((((pos - min) % range) + range) % range) + min;
        return wrappedPos;
    });

    return (
        <motion.div
            style={{
                x: xPos,
                width: itemWidth,
                // Since the parent is left: 50%, we need to offset by half width to center items initially
                left: `-${itemWidth / 2}px`
            }}
            className="absolute top-0 h-full flex-shrink-0 bg-gray-900 overflow-hidden group rounded-sm select-none"
        >
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="text-2xl font-light text-white">{item.title}</h3>
            </div>
        </motion.div>
    );
};

const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, gap: 32 });
    const x = useMotionValue(0);

    // Responsive width calculation
    useEffect(() => {
        const updateDimensions = () => {
            // Dimensions matching the previous design: 60vw mobile, 25vw desktop
            const isMobile = window.innerWidth < 768;
            const itemWidth = isMobile ? window.innerWidth * 0.6 : window.innerWidth * 0.25;
            const gap = isMobile ? 16 : 32;
            setDimensions({ width: itemWidth, gap });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Slide Logic: Step-by-step movement
    useEffect(() => {
        if (dimensions.width === 0) return;

        let controls: any;
        let timeoutId: any;

        // The distance to move for one item
        const stride = dimensions.width + dimensions.gap;

        const runLoop = async () => {
            // 1. Wait for 1 second (Stop phase)
            await new Promise(resolve => {
                timeoutId = setTimeout(resolve, 1000);
            });

            // 2. Animate to the next position (Move phase)
            // We calculate the *next* target based on current value minus one stride
            const currentX = x.get();
            const targetX = currentX - stride;

            controls = animate(x, targetX, {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1], // Custom bezier for a smooth "snap" feel
                onComplete: () => {
                    // 3. Loop: triggers the function again
                    runLoop();
                }
            });
        };

        // Start the loop
        runLoop();

        return () => {
            if (controls) controls.stop();
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [dimensions, x]);

    // Duplicate items enough times to ensure smooth infinite scrolling
    const RENDER_SETS = 3;
    const DISPLAY_ITEMS = Array(RENDER_SETS).fill(baseItems).flat().map((item, idx) => ({ ...item, uniqueId: idx }));

    if (dimensions.width === 0) return null;

    return (
        <section className="bg-black py-24 md:py-36 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
                <h2 className="serif text-3xl md:text-5xl text-white">Our Platforms</h2>
            </div>

            <div
                ref={containerRef}
                className="w-full h-[40vh] md:h-[50vh] relative touch-none"
                data-hover="true"
            >
                {/* Visual Layer - Centered */}
                <div className="absolute top-0 left-1/2 w-full h-full pointer-events-none z-20">
                    {DISPLAY_ITEMS.map((item, index) => (
                        <ScrollItem
                            key={`${item.uniqueId}-${dimensions.width}`}
                            item={item}
                            index={index}
                            x={x}
                            itemWidth={dimensions.width}
                            gap={dimensions.gap}
                            totalCount={DISPLAY_ITEMS.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
