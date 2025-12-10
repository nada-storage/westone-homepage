import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        title: "Design & UX Research",
        items: [
            "UX/UI Design",
            "Design Systems",
            "Brand",
            "UX Research & Testing",
            "Ideation & Prototyping"
        ]
    },
    {
        title: "Engineering",
        items: [
            "Full Stack Engineering",
            "Frontend Development",
            "Backend Development",
            "Mobile Development"
        ]
    },
    {
        title: "Product & Strategy",
        items: [
            "Product Management",
            "Product Strategy & Vision",
            "User Engagement & Retention"
        ]
    }
];

const ServiceCategories = () => {
    return (
        <section className="bg-black text-white py-20 md:py-32 px-6 md:px-20 border-t border-gray-900">
            {/* 
        Changes made:
        1. Removed 'max-w-7xl' and mx-auto to use full available width with padding.
        2. Increased gap between columns (gap-16 md:gap-24).
      */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 xl:gap-32">
                {categories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                    >
                        {/* Decorative line: Made slightly longer and thicker */}
                        <div className="w-12 h-[2px] bg-white mb-10"></div>

                        {/* Title: Increased to text-4xl */}
                        <h3 className="text-3xl md:text-4xl font-normal mb-12 text-white leading-tight">
                            {category.title}
                        </h3>

                        <ul className="space-y-6">
                            {category.items.map((item, i) => (
                                <li key={i} className="group relative flex items-center cursor-default h-10" data-hover="true">
                                    {/* Dot: Increased size */}
                                    <span className="absolute left-0 w-2.5 h-2.5 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-center"></span>

                                    {/* Text: Increased to text-2xl, increased translate distance */}
                                    <span className="text-xl md:text-2xl text-gray-400 group-hover:text-white transition-all duration-300 ease-out transform group-hover:translate-x-8">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServiceCategories;
