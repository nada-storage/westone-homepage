import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const pitchProject: Project = {
    id: '8',
    name: 'Pitch',
    client: 'Pitch',
    description: 'Collaborative presentations.',
    year: '2023',
    tags: ['SaaS', 'Web'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    color: '#4361ee',
    bgImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2560&auto=format&fit=crop',
    foregroundType: 'none',
    theme: 'light',
    accentColor: '#ffffff',
    layoutConfig: {
        titleStyles: 'absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10 px-4',
        descriptionStyles: 'absolute top-[65%] left-1/2 -translate-x-1/2 text-center max-w-lg px-4',
        imageWrapperStyles: 'hidden',
        enterAnimation: 'zoom-in',
    }
};

export const pitchDetails: ProjectDetailContent = {
    id: '8',
    media: {
        hero: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Pitch',
        type: 'SaaS',
        stage: 'Growth',
        deliverables: 'Web App, Marketing Site'
    },
    intro: {
        text: 'Pitch makes it easy for teams to work together to develop beautiful presentations.'
    },
    vision: {
        heading: 'Presentations that work for you.',
        text: 'We helped Pitch build a tool that empowers teams to create stunning decks in record time.',
        image1Title: 'Q3 Report',
        image1Subtitle: 'Editing',
        image3HoverText: 'Present'
    },
    marquee: 'Create • Collaborate • Present • Win • ',
    aura: {
        subheading: 'Product Design',
        heading: 'Fast, fluid, and fun.',
        text: 'A user interface that feels more like a creative studio than a productivity tool.',
        bigText: 'Flow.',
        card2Text: '"Work<br />Together."'
    },
    feature: {
        subheading: 'Real-time Sync',
        heading: 'Collaboration without the chaos.',
        text: 'See what your team is working on in real-time and co-create without stepping on toes.'
    },
    discovery: {
        heading: 'The modern way to share your best ideas.',
        items: [
            { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", title: "Templates" },
            { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", title: "Collaboration" },
            { img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop", title: "Analytics" },
            { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", title: "Remote" }
        ]
    },
    stats: {
        stat1: { value: '100k+', label: 'Teams' },
        stat2: { value: '1M+', label: 'Decks Created' },
        stat3: { value: '4.9', label: 'Product Rating' }
    }
};