import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const sunoProject: Project = {
    id: '5',
    name: 'Suno',
    client: 'Suno',
    description: 'Democratizing the music creation process with a prompt-to-song platform.',
    year: '2024',
    tags: ['Product Design', 'Brand', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1000',
    color: '#7209b7',
    bgImage: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?q=80&w=800&auto=format&fit=crop',
    foregroundType: 'mobile',
    theme: 'light',
    accentColor: '#a855f7',
    layoutConfig: {
        titleStyles: 'absolute top-[20%] left-[18%] text-left z-10',
        descriptionStyles: 'absolute bottom-[15%] left-[18%] text-left max-w-xs',
        imageWrapperStyles: 'absolute top-1/2 -translate-y-1/2 right-[10%] w-[320px] md:w-[380px] rotate-[-6deg]',
        enterAnimation: 'converge',
    }
};

export const sunoDetails: ProjectDetailContent = {
    id: '5',
    media: {
        hero: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Suno',
        type: 'AI Product',
        stage: 'Launch',
        deliverables: 'Web App, Mobile App, Branding'
    },
    intro: {
        text: 'Suno turns your imagination into music with just a few words.'
    },
    vision: {
        heading: 'Everyone is a musician.',
        text: 'We helped Suno create an intuitive platform where anyone can create professional-quality music.',
        image1Title: 'Generator',
        image1Subtitle: 'Create',
        image3HoverText: 'Play'
    },
    marquee: 'Create • Music • AI • Innovation • ',
    aura: {
        subheading: 'Creative Platform',
        heading: 'From prompt to performance.',
        text: 'A seamless creation flow that makes music production accessible to everyone.',
        bigText: 'Music.',
        card2Text: '"Your words,<br />Your song."'
    },
    feature: {
        subheading: 'AI Generation',
        heading: 'Type what you hear, hear what you type.',
        text: 'Advanced AI transforms simple text prompts into complete, studio-quality songs.'
    },
    discovery: {
        heading: 'Every genre, every style, every mood.',
        items: [
            { img: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070&auto=format&fit=crop", title: "Pop" },
            { img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop", title: "Rock" },
            { img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop", title: "Jazz" },
            { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop", title: "Electronic" }
        ]
    },
    stats: {
        stat1: { value: '10M+', label: 'Songs Created' },
        stat2: { value: '500K', label: 'Active Users' },
        stat3: { value: '4.8', label: 'User Rating' }
    }
};