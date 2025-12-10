import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const services = [
    {
        id: 1,
        title: "Defining a clear vision for the future",
        description: "Whether you're an R&D team at a Fortune 500 or a founder with a paper napkin sketch, we shape, ideate, prototype, and conceive beloved products for your users.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Set the bar for category defining design",
        description: "If you've proven product market fit and want to ensure your user experience is best-in-class, performant, and scalable by design, we can help you make it pixel-perfect.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "From strategic insight to implementation",
        description: "We don't just design screens; we design businesses. Our strategy team works alongside you to validate assumptions, find fit, and build a roadmap for success.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Production code that scales with you",
        description: "We build robust, production-ready software using modern stacks. No throwaway prototypes—just solid, scalable codebases ready for millions of users.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800"
    }
];

const ServiceCards = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { setCursorType } = useCursor();

    return (
        <section className="bg-black py-20 md:py-32 px-4 md:px-8 text-white">
            <div className="w-full">
                <div className="mb-12 border-b border-gray-800 pb-6">
                    <h2 className="serif text-4xl md:text-5xl text-white">Our Expertise</h2>
                </div>

                <div className="flex flex-col border-t border-gray-800">
                    {services.map((service, index) => {
                        const isHovered = hoveredIndex === index;

                        return (
                            <motion.div
                                key={service.id}
                                layout
                                className="group border-b border-gray-800 cursor-pointer overflow-hidden relative"
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                    setCursorType('view');
                                }}
                                onMouseLeave={() => {
                                    setHoveredIndex(null);
                                    setCursorType('default');
                                }}
                                data-hover="true"
                                initial={{ backgroundColor: "transparent" }}
                                animate={{ backgroundColor: isHovered ? "rgba(20,20,20,0.4)" : "transparent" }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                {/* 
                                Padding Animation Logic: 
                                py-10 (default) -> py-24 (hover) 
                                Keeps the spacious, breathing effect.
                            */}
                                <div className={`w-full transition-all duration-500 ease-out ${isHovered ? 'py-24' : 'py-10'}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                                        {/* Left: Title (Span 4 to balance with wider image) */}
                                        <div className="md:col-span-4 flex items-center gap-6">
                                            <h3 className={`serif text-3xl md:text-5xl leading-tight transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-200'}`}>
                                                {service.title}
                                            </h3>
                                            {/* White Dot Indicator */}
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                                                className="w-3 h-3 bg-white rounded-full flex-shrink-0"
                                            />
                                        </div>

                                        {/* Center: Image (Span 4 to accommodate landscape width) - Visible only on hover */}
                                        <div className="hidden md:flex md:col-span-4 justify-center items-center h-full min-h-[1px]">
                                            <AnimatePresence>
                                                {isHovered && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0, width: 360 }}
                                                        animate={{ opacity: 1, height: 240, width: 360 }} // 3:2 Landscape Ratio (360px x 240px)
                                                        exit={{ opacity: 0, height: 0, width: 360 }}
                                                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                                        className="overflow-hidden rounded-sm relative"
                                                    >
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Right: Description (Span 4) */}
                                        <div className="md:col-span-4 pl-0 md:pl-8">
                                            <p className={`text-base md:text-xl leading-relaxed transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
