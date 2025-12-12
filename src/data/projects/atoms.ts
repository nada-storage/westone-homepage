import type { Project, ProjectDetailContent } from '../../types';

export const atomsProject: Project = {
    id: '2',
    name: 'Atoms',
    client: 'Atoms',
    description: 'Creating the official Atomic Habits app based on the best-selling book.',
    year: '2022',
    tags: ['Product Design', 'Strategy', 'Brand'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    color: '#e76f51',
    bgImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    foregroundType: 'image',
    theme: 'dark',
    accentColor: '#000000',
    layoutConfig: {
        titleStyles: 'absolute bottom-[10%] left-[10%] text-left font-serif z-20 mix-blend-overlay opacity-90',
        descriptionStyles: 'absolute top-[15%] right-[10%] text-right max-w-xs',
        imageWrapperStyles: 'absolute top-[45%] right-[15%] w-[260px] md:w-[340px] aspect-[1/1.4] rotate-[6deg] shadow-2xl',
        enterAnimation: 'fade-up',
    }
};

export const atomsDetails: ProjectDetailContent = {
    id: '2',
    media: {
        hero: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2000&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Atoms',
        type: 'E-commerce',
        stage: 'Scale-up',
        deliverables: 'Brand Identity, Web Design'
    },
    intro: {
        text: 'Atoms is redefining the everyday shoe with quarter sizes and perfect fit.'
    },
    vision: {
        heading: 'The perfect fit for the modern world.',
        text: 'We worked with Atoms to create a digital experience that reflects their obsession with comfort and detail.',
        image1Title: 'Model 000',
        image1Subtitle: 'New Release',
        image3HoverText: 'Comfort'
    },
    marquee: 'Comfort • Style • Precision • Fit • ',
    aura: {
        subheading: 'Design Philosophy',
        heading: 'Simple on the surface, complex underneath.',
        text: 'A visual language that celebrates the subtle details and the magic of a perfect fit.',
        bigText: 'Fit.',
        card2Text: '"Walk on<br />Clouds."'
    },
    feature: {
        subheading: 'Customization',
        heading: 'Find your perfect size, down to the quarter.',
        text: 'A unique sizing system that ensures your shoes fit perfectly, every time.'
    },
    discovery: {
        heading: 'Discover the collection that changed how we walk.',
        items: [
            { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop", title: "Model 000" },
            { img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop", title: "Everyday" },
            { img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop", title: "Comfort+" },
            { img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop", title: "Limited" }
        ]
    },
    stats: {
        stat1: { value: '1M+', label: 'Pairs Sold' },
        stat2: { value: '4.8', label: 'Customer Rating' },
        stat3: { value: '50+', label: 'Countries' }
    }
};