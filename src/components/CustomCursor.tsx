import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Use MotionValues for tracking mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Configuration for "snappy" but smooth movement.
    // Higher stiffness and lower damping for faster response.
    const springConfig = { damping: 20, stiffness: 1200, mass: 0.2 };

    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    // Separate spring for scale
    const scale = useSpring(1, { damping: 20, stiffness: 400 });

    useEffect(() => {
        // Scale up slightly for the donut effect
        scale.set(isHovered ? 2.5 : 1);
    }, [isHovered, scale]);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Center the cursor
            mouseX.set(e.clientX - 6);
            mouseY.set(e.clientY - 6);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for interactive elements or explicit data-hover attributes
            const isInteractive =
                target.closest('button') ||
                target.closest('a') ||
                target.closest('[data-hover="true"]');

            setIsHovered(!!isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main Cursor Dot/Donut */}
            <motion.div
                className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] transition-colors duration-200
                ${isHovered ? 'bg-transparent border-[0.5px] border-white' : 'bg-white'}
            `}
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: scale,
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};
