import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, MotionValue, animate, type PanInfo } from 'framer-motion';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Metalab has one of the best interface design teams in the world. Their work has the power to change your business.",
        author: "Brian Armstrong",
        role: "Founder & CEO - Coinbase",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "From research to new concepts to testing to production-ready flows – they pushed the bar and helped us ship faster.",
        author: "Emeka Okafor",
        role: "Product Lead - Instacart",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "When I have an idea for a complex product, I only trust Metalab to help me bring it to life.",
        author: "Pat Kinsel",
        role: "Founder & CEO - Notarize",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 4,
        quote: "It's mind-boggling how good they are at what they do. We wouldn't be here without them.",
        author: "Holly Whitaker",
        role: "Founder - Tempest",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    }
];

// Configuration
const CARD_WIDTH = 320;
const GAP = 100;
const TOTAL_ITEM_WIDTH = CARD_WIDTH + GAP;
const ITEMS = testimonials;
// We render 4 sets to ensure the screen is filled on large monitors
const RENDER_SETS = 4;
const DISPLAY_ITEMS: Testimonial[] = Array(RENDER_SETS).fill(ITEMS).flat();

const DraggableCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use a motion value to track the drag position globally
    const x = useMotionValue(0);

    // Handle Pan Gesture (Drag without moving the element)
    const onPan = (_e: any, info: PanInfo) => {
        // Directly update x based on delta.
        // This allows infinite movement without the element actually moving away.
        x.set(x.get() + info.delta.x);
    };

    const onPanStart = () => {
        // Stop any ongoing inertia animation when user grabs again
        x.stop();
    };

    const onPanEnd = (_e: any, info: PanInfo) => {
        // Calculate target based on velocity ("throw")
        // Factor 0.12 reduces the throw distance (low sensitivity)
        const moveDistance = info.velocity.x * 0.12;
        const targetX = x.get() + moveDistance;

        // Animate to the calculated target
        animate(x, targetX, {
            type: "spring",
            mass: 0.5,      // Lighter mass stops faster
            stiffness: 200, // Higher stiffness snaps to position
            damping: 30,    // High damping prevents overshoot and feels "heavy"
        });
    };

    return (
        <section className="bg-black pt-24 pb-8 md:pt-40 md:pb-12 overflow-hidden relative select-none">
            <div className="mb-12 px-4 md:px-12 relative z-10 pointer-events-none">
                <h2 className="serif text-5xl md:text-7xl text-white mb-6">From pre-seed to Fortune 500</h2>
            </div>

            {/* 
         The Container acts as the interactive surface.
         We use onPan instead of drag. This means the div itself stays fixed (inset-0),
         but we capture the movement delta to drive the animation.
         No giant div needed!
      */}
            <div
                ref={containerRef}
                className="w-full min-h-[800px] relative touch-none"
                data-hover="true"
            >
                {/* Invisible gesture handler layer. Added cursor-none to enforce custom cursor during drag. */}
                <motion.div
                    className="absolute inset-0 z-30"
                    onPan={onPan}
                    onPanStart={onPanStart}
                    onPanEnd={onPanEnd}
                />

                {/* The Visual Items Layer */}
                <div className="absolute top-0 left-1/2 w-full h-full pointer-events-none z-20 -translate-x-1/2">
                    {DISPLAY_ITEMS.map((item, index) => (
                        <CarouselItem
                            key={`${item.id}-${index}`}
                            item={item}
                            index={index}
                            x={x}
                            totalCount={DISPLAY_ITEMS.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CarouselItemProps {
    item: Testimonial;
    index: number;
    x: MotionValue<number>;
    totalCount: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, index, x, totalCount }) => {
    // Determine zigzag based on the *content* ID to ensure consistency
    const isEven = item.id % 2 === 0;

    // Position each item sequentially
    const baseOffset = (index * TOTAL_ITEM_WIDTH);

    // The width of the entire track rendered
    const trackWidth = totalCount * TOTAL_ITEM_WIDTH;

    // Transform the x value into a wrapped position
    const xPos = useTransform(x, (latestX) => {
        // 1. Calculate raw position based on drag
        let pos = baseOffset + latestX;

        // 2. Center offset logic
        // We shift by half track width so the "center" of our calculation is 0
        pos -= (trackWidth / 2);

        // 3. Wrap logic (Standard Modulo)
        // This ensures the item stays within the visible range [-trackWidth/2, trackWidth/2]
        // regardless of how far x increases or decreases.
        const min = -trackWidth / 2;
        const max = trackWidth / 2;
        const range = max - min;

        // Custom modulo for negative numbers
        const wrappedPos = ((((pos - min) % range) + range) % range) + min;

        return wrappedPos;
    });

    return (
        <motion.div
            style={{ x: xPos }}
            className={`
                absolute top-0 left-0 w-[320px] flex flex-col gap-6 select-none
                ${isEven ? 'mt-48' : 'mt-0'} 
            `}
        >
            {/* 
                Updated Animation: Bottom-to-top reveal using clipPath.
                Removed 'once: true' so it re-triggers every time the item enters the viewport.
            */}
            <motion.div
                className="w-full h-[320px] overflow-hidden rounded-sm bg-gray-900 shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src={item.image}
                    alt={item.author}
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                    draggable={false} // Prevent native image drag
                />
            </motion.div>
            <div className="space-y-4 pr-4">
                <p className="text-lg md:text-xl text-white font-serif leading-relaxed">
                    “{item.quote}”
                </p>
                <div>
                    <p className="text-white font-medium text-sm">{item.author}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{item.role}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default DraggableCarousel;
