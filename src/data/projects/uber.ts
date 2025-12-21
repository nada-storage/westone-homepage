import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const uberProject: Project = {
    id: '6',
    name: 'Uber',
    client: 'Uber',
    description: 'Product Design, Engineering for the world\'s largest mobility platform.',
    year: '2021',
    tags: ['Service Design', 'Mobile App'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000',
    color: '#000000',
    bgImage: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=800&auto=format&fit=crop',
    foregroundType: 'image',
    theme: 'light',
    accentColor: '#ffffff',
    layoutConfig: {
        titleStyles: 'absolute top-[18%] right-[10%] text-right z-10',
        descriptionStyles: 'absolute bottom-[18%] right-[10%] text-right max-w-xs md:max-w-sm',
        imageWrapperStyles: 'absolute bottom-[5%] left-[15%] w-[300px] md:w-[450px] aspect-[4/5] rotate-[3deg] shadow-2xl rounded-lg',
        enterAnimation: 'cross-fade',
    }
};

export const uberDetails: ProjectDetailContent = {
    id: '6',
    media: {
        hero: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1527951980380-e6b5ff24d1a4?q=80&w=2070&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Uber',
        type: 'Platform',
        stage: 'Scale',
        deliverables: 'App Design, Service Design'
    },
    intro: {
        text: 'Uber is redefining urban mobility for millions of riders and drivers worldwide.'
    },
    vision: {
        heading: 'Move the way you want.',
        text: 'We partnered with Uber to create seamless experiences that connect people with their destinations.',
        image1Title: 'Ride',
        image1Subtitle: 'Request',
        image3HoverText: 'Go'
    },
    marquee: 'Mobility • Freedom • City • Movement • ',
    aura: {
        subheading: 'Service Experience',
        heading: 'Effortless movement, everywhere.',
        text: 'Designing for speed, safety, and simplicity across every touchpoint.',
        bigText: 'Move.',
        card2Text: '"Your ride,<br />On demand."'
    },
    feature: {
        subheading: 'Real-time Matching',
        heading: 'Connected in seconds.',
        text: 'Intelligent algorithms match riders with drivers instantly for the fastest pickup.'
    },
    discovery: {
        heading: 'One platform, every journey.',
        items: [
            { img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop", title: "Ride" },
            { img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2070&auto=format&fit=crop", title: "Eats" },
            { img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop", title: "Freight" },
            { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop", title: "Transit" }
        ]
    },
    stats: {
        stat1: { value: '150M', label: 'Monthly Users' },
        stat2: { value: '10K+', label: 'Cities' },
        stat3: { value: '5M+', label: 'Drivers' }
    }
};