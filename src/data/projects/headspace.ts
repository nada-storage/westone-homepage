import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const headspaceProject: Project = {
    id: '9',
    name: 'Headspace',
    client: 'Headspace',
    description: 'Meditation made simple.',
    year: '2020',
    tags: ['App', 'Wellness'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
    color: '#fca311',
    bgImage: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=800&auto=format&fit=crop',
    foregroundType: 'image',
    theme: 'light',
    accentColor: '#fbbf24',
    layoutConfig: {
        titleStyles: 'absolute top-[15%] right-[10%] text-right w-full',
        descriptionStyles: 'absolute bottom-[30%] left-[15%] text-left max-w-md',
        imageWrapperStyles: 'absolute bottom-[10%] right-[5%] w-[350px] md:w-[500px] aspect-video rounded-3xl shadow-2xl opacity-95',
        enterAnimation: 'soft-drop',
    }
};

export const headspaceDetails: ProjectDetailContent = {
    id: '9',
    media: {
        hero: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Headspace',
        type: 'App',
        stage: 'Growth',
        deliverables: 'Mobile App, Illustration'
    },
    intro: {
        text: 'Headspace is your guide to everyday mindfulness in a few minutes a day.'
    },
    vision: {
        heading: 'Mindfulness for everyone.',
        text: 'We created a friendly, accessible experience that demystifies meditation.',
        image1Title: 'Daily Calm',
        image1Subtitle: 'Session 1',
        image3HoverText: 'Breathe'
    },
    marquee: 'Breathe • Focus • Sleep • Relax • ',
    aura: {
        subheading: 'Brand Voice',
        heading: 'Friendly, warm, and wise.',
        text: 'Using playful illustration and soothing colors to create a safe space for mental health.',
        bigText: 'Calm.',
        card2Text: '"Kind to<br />Mind."'
    },
    feature: {
        subheading: 'Guided Sessions',
        heading: 'Meditation made simple.',
        text: 'Step-by-step guidance for any mood, from focus to sleep to stress relief.'
    },
    discovery: {
        heading: 'Find some headspace in a busy world.',
        items: [
            { img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop", title: "Meditation" },
            { img: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2070&auto=format&fit=crop", title: "Sleep" },
            { img: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop", title: "Focus" },
            { img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop", title: "Kids" }
        ]
    },
    stats: {
        stat1: { value: '70M+', label: 'Downloads' },
        stat2: { value: '190', label: 'Countries' },
        stat3: { value: '4.9', label: 'App Rating' }
    }
};