import React from 'react';
import { motion } from 'framer-motion';
import HeroVideo from './HeroVideo';
import HorizontalScroll from './HorizontalScroll';
import ServiceCards from './ServiceCards';
import ServiceCategories from './ServiceCategories';
import Marquee from './Marquee';
import DraggableCarousel from './DraggableCarousel';
import ProcessGrid from './ProcessGrid';
import CinematicFrame from './CinematicFrame';
import ImpactStats from './ImpactStats';

const WhatWeDo: React.FC = () => {
    return (
        <motion.div
            className="absolute inset-0 bg-black text-white overflow-y-auto z-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="w-full pt-20">
                {/* 1. Hero Video with Play Interaction */}
                <HeroVideo />

                {/* 2. Horizontal Scroll Gallery */}
                <HorizontalScroll />

                {/* 3. Hover Details Section */}
                <ServiceCards />

                {/* 4. Detailed Service Categories List */}
                <ServiceCategories />

                {/* 5. Marquee Animation */}
                <Marquee />

                {/* 6. Draggable Carousel */}
                <DraggableCarousel />

                {/* 7. Process Grid with Hover */}
                <ProcessGrid />

                {/* 8. Scroll Interaction */}
                <CinematicFrame />

                {/* 9. Final Stats */}
                <ImpactStats />
            </div>
        </motion.div>
    );
};

export default WhatWeDo;
