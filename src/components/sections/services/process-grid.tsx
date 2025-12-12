import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from "@/context/cursor-context";

const steps = [
    {
        id: "01",
        title: "Product focus",
        desc: "We don't do marketing sites. We build functional software that powers businesses.",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "02",
        title: "Co-founder mentality",
        desc: "We act as true partners, pushing you and ourselves to find the best outcome.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "03",
        title: "Track record",
        desc: "Our products live in your home and on your phone and have done so for decades.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "04",
        title: "Software not vaporware",
        desc: "We deliver production-ready code and pixel-perfect design assets ready for scale.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "05",
        title: "Startup pace",
        desc: "We move fast, iterating quickly to get you to market sooner than the competition.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "06",
        title: "Small, world-class teams",
        desc: "Dedicated teams of senior talent focused solely on your project's success.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    }
];

const ProcessGrid = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { setCursorType } = useCursor();

    return (
        <section className="bg-black text-white pt-8 pb-32 md:pt-12 md:pb-56">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 mb-32 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h2 className="text-5xl md:text-7xl font-serif leading-tight max-w-5xl">
                    After shipping hundreds of products, there are a few key things we’ve learned are needed to do the best work
                </h2>
                <a
                    href="#"
                    className="hidden md:inline-block text-sm font-medium border-b border-white pb-1 hover:text-gray-300 transition-colors whitespace-nowrap mb-2"
                    data-hover="true"
                >
                    View the work &rarr;
                </a>
            </div>

            {/* Horizontal Accordion */}
            <div className="w-full border-t border-b border-gray-800 flex flex-col md:flex-row h-auto md:h-[450px]">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        // Use flex column layout to stack: Number (top) -> Image (middle/fill) -> Text (bottom)
                        className="group relative border-b md:border-b-0 md:border-r border-gray-800 p-8 flex flex-col h-[300px] md:h-auto overflow-hidden bg-black"
                        onMouseEnter={() => {
                            setHoveredIndex(index);
                            setCursorType('view');
                        }}
                        onMouseLeave={() => {
                            setHoveredIndex(null);
                            setCursorType('default');
                        }}
                        data-hover="true"
                        // Animate flex-grow to create the spread effect
                        animate={{
                            flex: hoveredIndex === index ? 3 : 1,
                            opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1
                        }}
                        transition={{
                            flex: {
                                duration: 0.5,
                                ease: "easeInOut",
                                // Wait for content to fade out before shrinking width
                                delay: hoveredIndex === index ? 0 : 0.3
                            },
                            opacity: { duration: 0.3 }
                        }}
                    >
                        {/* Decorative Line (Absolute to parent) */}
                        <motion.div
                            className="w-[1px] h-full absolute right-0 top-0 bg-blue-600 hidden md:block z-30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        />

                        {/* 1. Header (Number) - Fixed at top */}
                        <div className="flex justify-between items-start z-20 relative shrink-0">
                            <span className="text-xl font-serif">{step.id}</span>
                        </div>

                        {/* 2. Middle (Image) - Fills remaining space */}
                        <div className="flex-grow relative w-full my-6 overflow-hidden rounded-sm">
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 w-full h-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            // Enter: Wait for width expansion (delay 0.3)
                                            // Exit: Immediate fade out (duration 0.2)
                                            duration: hoveredIndex === index ? 0.4 : 0.2,
                                            delay: hoveredIndex === index ? 0.3 : 0
                                        }}
                                    >
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover grayscale opacity-50"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* 3. Footer (Description + Title) - Fixed at bottom */}
                        <div className="flex flex-col justify-end shrink-0 z-20 relative">
                            <AnimatePresence>
                                {(hoveredIndex === index) && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: hoveredIndex === index ? 0.4 : 0.2,
                                            delay: hoveredIndex === index ? 0.3 : 0
                                        }}
                                        className="mb-4"
                                    >
                                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
                                            {step.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.h3
                                layout="position"
                                className="text-2xl md:text-3xl leading-tight"
                            >
                                {step.title}
                            </motion.h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Link (Visible only on small screens) */}
            <div className="px-4 mt-8 md:hidden">
                <a href="#" className="text-sm font-medium border-b border-white pb-1">View the work &rarr;</a>
            </div>
        </section>
    );
};

export default ProcessGrid;
