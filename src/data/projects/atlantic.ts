import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const atlanticProject: Project = {
    id: '4',
    name: 'The Atlantic',
    client: 'The Atlantic',
    description: 'Reimagining one of the world\'s most historically significant publications.',
    year: '2024',
    tags: ['Product Design', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000',
    color: '#d62828',
    bgImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2560&auto=format&fit=crop',
    foregroundType: 'none',
    theme: 'light',
    accentColor: '#ef4444',
    layoutConfig: {
        titleStyles: 'absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-serif italic',
        descriptionStyles: 'absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center max-w-md',
        imageWrapperStyles: 'hidden',
        enterAnimation: 'zoom-in',
    }
};

export const atlanticDetails: ProjectDetailContent = {
    id: '4',
    media: {
        hero: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'The Atlantic',
        type: 'Publishing',
        stage: 'Legacy',
        deliverables: 'Website, CMS, Mobile App'
    },
    intro: {
        text: 'The Atlantic has been a trusted source of journalism since 1857.'
    },
    vision: {
        heading: 'Journalism for the digital age.',
        text: 'We worked with The Atlantic to bring their storied legacy into a modern, digital-first era.',
        image1Title: 'Feature',
        image1Subtitle: 'Latest Issue',
        image3HoverText: 'Read'
    },
    marquee: 'Ideas • Culture • Politics • Science • ',
    aura: {
        subheading: 'Editorial Experience',
        heading: 'Timeless design meets modern reading.',
        text: 'A design system that honors journalistic tradition while embracing contemporary media.',
        bigText: 'Truth.',
        card2Text: '"Of enduring<br />consequence."'
    },
    feature: {
        subheading: 'Reading Experience',
        heading: 'Designed for deep engagement.',
        text: 'Typography and layout that encourages thoughtful reading and reflection.'
    },
    discovery: {
        heading: 'Topics that shape our world.',
        items: [
            { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop", title: "Politics" },
            { img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop", title: "Culture" },
            { img: "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?q=80&w=2070&auto=format&fit=crop", title: "Science" },
            { img: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop", title: "Technology" }
        ]
    },
    stats: {
        stat1: { value: '167', label: 'Years of Journalism' },
        stat2: { value: '13M', label: 'Monthly Readers' },
        stat3: { value: '500+', label: 'Pulitzer Prizes' }
    }
};