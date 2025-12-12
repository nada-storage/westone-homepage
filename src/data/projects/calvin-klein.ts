import type { Project } from '../../types';
import type { ProjectDetailContent } from '../../types';

export const calvinKleinProject: Project = {
    id: '7',
    name: 'Calvin Klein',
    client: 'CK',
    description: 'Fashion forward aesthetics.',
    year: '2022',
    tags: ['Brand', 'E-com'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000',
    color: '#495057',
    bgImage: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2560&auto=format&fit=crop',
    foregroundImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
    foregroundType: 'image',
    theme: 'light',
    accentColor: '#60a5fa',
    layoutConfig: {
        titleStyles: 'absolute top-[15%] left-[15%] text-left',
        descriptionStyles: 'absolute top-[15%] right-[10%] text-right max-w-sm',
        imageWrapperStyles: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] md:w-[45%] aspect-video shadow-2xl rounded-xl',
        enterAnimation: 'pop-in',
    }
};

export const calvinKleinDetails: ProjectDetailContent = {
    id: '7',
    media: {
        hero: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
        visionMain: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2070&auto=format&fit=crop',
        visionGrid1: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop',
        visionGrid2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
        auraBento: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
        auraCard: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop',
        featureInit: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
        featureResult: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2070&auto=format&fit=crop'
    },
    hero: {
        title: 'Calvin Klein',
        type: 'Brand',
        stage: 'Global',
        deliverables: 'E-commerce, Digital Identity'
    },
    intro: {
        text: 'Calvin Klein is synonymous with modern minimalism. We brought that aesthetic to their digital flagship.'
    },
    vision: {
        heading: 'Digital minimalism, maximized impact.',
        text: 'We reimagined the online shopping experience to be as bold and clean as the brand itself.',
        image1Title: 'Collection',
        image1Subtitle: 'Spring 2024',
        image3HoverText: 'Shop'
    },
    marquee: 'Style • Iconic • Modern • Identity • ',
    aura: {
        subheading: 'Brand Aesthetics',
        heading: 'Bold simplicity.',
        text: 'Leveraging high-impact imagery and sparse typography to let the product speak for itself.',
        bigText: 'Icon.',
        card2Text: '"Less is<br />More."'
    },
    feature: {
        subheading: 'Shopping Experience',
        heading: 'Seamless from discovery to checkout.',
        text: 'A frictionless path to purchase that elevates the browsing experience.'
    },
    discovery: {
        heading: 'Defining modern fashion for over 50 years.',
        items: [
            { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", title: "Women" },
            { img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2070&auto=format&fit=crop", title: "Men" },
            { img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop", title: "Underwear" },
            { img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop", title: "Jeans" }
        ]
    },
    stats: {
        stat1: { value: '50+', label: 'Global Markets' },
        stat2: { value: '#1', label: 'Brand Awareness' },
        stat3: { value: '3x', label: 'eCom Growth' }
    }
};