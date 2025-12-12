import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const upworkProject: Project = {
    id: '3',
    name: 'Upwork',
    client: 'Upwork',
    description: 'Transforming the job board into the world\'s marketplace for work.',
    year: '2023',
    tags: ['Vision', 'Product Design'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    color: '#14a800',
    bgImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop',
    foregroundType: 'image',
    theme: 'light',
    accentColor: '#4ade80',
    layoutConfig: {
        titleStyles: 'absolute top-[20%] left-[12%] text-left',
        descriptionStyles: 'absolute top-[30%] left-[12%] pt-28 md:pt-40 text-left max-w-sm',
        imageWrapperStyles: 'absolute top-1/2 -translate-y-1/2 right-[5%] w-[45%] aspect-[4/3] rotate-[-2deg] rounded-lg shadow-xl',
        enterAnimation: 'glide-right',
    }
};

export const upworkDetails: ProjectDetailContent = {
    id: '3',
    media: {
        hero: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Upwork',
        type: 'Platform',
        stage: 'Enterprise',
        deliverables: 'Web App, Mobile App'
    },
    intro: {
        text: 'Upwork connects businesses with independent talent from around the globe.'
    },
    vision: {
        heading: 'The world is your workforce.',
        text: 'We reimagined Upwork as a true marketplace where opportunity meets talent.',
        image1Title: 'Find Talent',
        image1Subtitle: 'Browse',
        image3HoverText: 'Hire'
    },
    marquee: 'Work • Freedom • Global • Opportunity • ',
    aura: {
        subheading: 'Platform Evolution',
        heading: 'From job board to work marketplace.',
        text: 'A modern, dynamic interface that puts opportunity at your fingertips.',
        bigText: 'Work.',
        card2Text: '"Where talent<br />meets opportunity."'
    },
    feature: {
        subheading: 'Matching',
        heading: 'AI-powered talent discovery.',
        text: 'Smart algorithms match businesses with the perfect freelancer for their project.'
    },
    discovery: {
        heading: 'Work on your terms.',
        items: [
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", title: "Freelance" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop", title: "Full-time" },
            { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", title: "Contract" },
            { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", title: "Project" }
        ]
    },
    stats: {
        stat1: { value: '$2B+', label: 'Earned by Freelancers' },
        stat2: { value: '12M+', label: 'Registered Freelancers' },
        stat3: { value: '5M+', label: 'Clients' }
    }
};