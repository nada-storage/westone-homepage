import React from 'react';

interface CarouselItem {
    img: string;
    title: string;
}

export const ImageCarousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
    // Duplicate items 4 times to ensure content is wider than any screen 
    // and loops seamlessly. The keyframe animation translates -50%, 
    // so we need 2 full sets of visual content to make the loop invisible.
    // We duplicate 4 times to ensure 50% width is substantial enough.
    const displayItems = [...items, ...items, ...items, ...items];

    return (
        <div className="w-full overflow-hidden pb-12 select-none">
            <div className="flex w-max animate-scroll pause-on-hover">
                {displayItems.map((item, index) => (
                    <div
                        key={index}
                        className="mx-4 relative w-[280px] md:w-[400px] h-[380px] md:h-[500px] flex-shrink-0 bg-neutral-900 rounded-lg overflow-hidden group cursor-pointer"
                    >
                        <img
                            src={item.img}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                            alt={item.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-8 left-8">
                            <h4 className="text-2xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">{item.title}</h4>
                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Listen now →</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
