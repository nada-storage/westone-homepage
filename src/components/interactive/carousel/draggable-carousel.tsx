import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, MotionValue, animate, type PanInfo } from 'framer-motion';
import { useCursor } from '../../../context/cursor-context';

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
        quote: "사용자가 보는 모든 픽셀에는\n고민이 담겨있어야 한다고 생각합니다.\n인터랙션 하나하나가 경험을 만듭니다.",
        author: "박건준",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "안정적이고 확장 가능한 시스템 설계가\n좋은 서비스의 기반입니다.\n눈에 보이지 않지만 가장 중요한 부분이죠.",
        author: "박희정",
        role: "Backend Developer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "프론트부터 백엔드까지 전체를 보면\n더 나은 의사결정을 할 수 있습니다.\n효율과 품질, 둘 다 잡을 수 있어요.",
        author: "양종태",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 4,
        quote: "빠른 배포와 안정적인 운영,\n둘 모두를 잡는게 제 목표입니다.\n그것 만으로도 다른개발자들이\n코드에만 집중할 수 있도록 해주죠.",
        author: "이지민",
        role: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop"
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
    const { setCursorType } = useCursor();
    const [isMobile, setIsMobile] = useState(false);

    // Use a motion value to track the drag position globally
    const x = useMotionValue(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

    // Mobile: Zigzag vertical layout
    if (isMobile) {
        return (
            <section className="bg-black pt-16 pb-8 overflow-hidden relative">
                <div className="mb-8 px-4 relative z-10">
                    <h2 className="serif text-4xl text-white mb-6">Meet the Team</h2>
                </div>

                <div className="px-4 space-y-6">
                    {testimonials.map((item, index) => (
                        <MobileTeamCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </section>
        );
    }

    // Desktop: Draggable carousel
    return (
        <section className="bg-black pt-24 pb-8 md:pt-40 md:pb-12 overflow-hidden relative select-none">
            <div className="mb-12 px-4 md:px-12 relative z-10 pointer-events-none">
                <h2 className="serif text-5xl md:text-7xl text-white mb-6">Meet the Team</h2>
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
                onMouseEnter={() => setCursorType('drag')}
                onMouseLeave={() => setCursorType('default')}
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

// Mobile Zigzag Card Component
interface MobileTeamCardProps {
    item: Testimonial;
    index: number;
}

const MobileTeamCard: React.FC<MobileTeamCardProps> = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`flex flex-col ${isEven ? 'items-start pr-12' : 'items-end pl-12'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="w-[65vw] max-w-[280px]">
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-gray-900 shadow-xl mb-4">
                    <img
                        src={item.image}
                        alt={item.author}
                        className="w-full h-full object-cover grayscale opacity-90"
                        draggable={false}
                    />
                </div>
                <div className="space-y-3">
                    <p className="text-sm text-white font-serif leading-relaxed whitespace-pre-line">
                        "{item.quote}"
                    </p>
                    <div>
                        <p className="text-white font-medium text-sm">{item.author}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{item.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
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
                <p className="text-base md:text-lg text-white font-serif leading-relaxed whitespace-pre-line">
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
