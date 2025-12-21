import type { Project, ProjectDetailContent } from '../../types';

export const roProject: Project = {
    id: '1',
    name: 'Ro',
    client: 'Ro',
    description: 'Building a goals-based healthcare offering that feels deeply personal.',
    year: '2023',
    tags: ['Product Design', 'Engineering', 'Brand'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    color: '#fca5a5',
    bgImage: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    foregroundType: 'image',
    theme: 'light',
    accentColor: '#fca5a5',
    layoutConfig: {
        titleStyles: 'absolute top-[45%] right-[12%] -translate-y-1/2 text-right italic font-serif z-10',
        descriptionStyles: 'absolute bottom-[15%] right-[12%] text-right max-w-xs',
        imageWrapperStyles: 'absolute top-[20%] left-[20%] w-[280px] md:w-[350px] aspect-[3/4] -rotate-[4deg] shadow-xl',
        enterAnimation: 'split-slide',
    }
};

export const roDetails: ProjectDetailContent = {
    id: '1',
    media: {
        hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000',
        visionMain: 'https://images.unsplash.com/photo-1576091160550-21733e99dbb9?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1576091160550-21733e99dbb9?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2000&auto=format&fit=crop'
    },
    hero: {
        title: 'Ro',
        type: 'Product',
        stage: 'Growth',
        deliverables: 'Mobile App, Web Platform'
    },
    intro: {
        text: 'Ro is simplifying healthcare by connecting patients with doctors and medication directly.'
    },
    vision: {
        heading: 'Healthcare that revolves around you, not the other way around.',
        text: 'We helped Ro build a patient-centric platform that creates a seamless journey from diagnosis to delivery.',
        image1Title: 'Patient Care',
        image1Subtitle: 'Active Session',
        image3HoverText: 'Care Team'
    },
    marquee: 'Health • Care • Simple • Direct • ',
    aura: {
        subheading: 'The Ro Experience',
        heading: 'Clinical rigour meets consumer comfort.',
        text: 'We designed a system that feels trustworthy and medical, yet warm and accessible.',
        bigText: 'Care.',
        card2Text: '"Your health,<br />Your way."'
    },
    feature: {
        subheading: 'Telehealth',
        heading: 'Connecting patients to care in seconds.',
        text: 'Through a streamlined intake process, patients can get the care they need without leaving their home.'
    },
    discovery: {
        heading: 'A comprehensive catalog of treatments and care options.',
        items: [
            { img: "https://images.unsplash.com/photo-1576091160550-21733e99dbb9?q=80&w=2070&auto=format&fit=crop", title: "Men's Health" },
            { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop", title: "Women's Health" },
            { img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop", title: "Skincare" },
            { img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop", title: "Wellness" }
        ]
    },
    stats: {
        stat1: { value: '5M+', label: 'Patient Visits' },
        stat2: { value: '98%', label: 'Satisfaction Rate' },
        stat3: { value: 'Top 3', label: 'Health Apps' }
    }
};