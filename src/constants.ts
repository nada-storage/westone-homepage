import type { Project, NewsItem, MenuItem } from './types';

export const PROJECTS: Project[] = [
    {
        id: '1',
        name: 'Ro',
        client: 'Ro',
        description: 'Healthcare simplified for everyone.',
        year: '2023',
        tags: ['Product', 'Mobile'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
        color: '#2a9d8f'
    },
    {
        id: '2',
        name: 'Atoms',
        client: 'Atoms',
        description: 'The ideal everyday shoe.',
        year: '2022',
        tags: ['E-commerce', 'Brand'],
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
        color: '#e76f51'
    },
    {
        id: '3',
        name: 'Upwork',
        client: 'Upwork',
        description: 'How the world works today.',
        year: '2023',
        tags: ['Platform', 'Web'],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
        color: '#14a800'
    },
    {
        id: '4',
        name: 'The Atlantic',
        client: 'The Atlantic',
        description: 'Journalism for the modern age.',
        year: '2024',
        tags: ['Media', 'App'],
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000',
        color: '#d62828'
    },
    {
        id: '5',
        name: 'Suno',
        client: 'Suno',
        description: 'Make music with AI.',
        year: '2024',
        tags: ['AI', 'Web'],
        image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1000',
        color: '#7209b7'
    },
    {
        id: '6',
        name: 'Uber',
        client: 'Uber',
        description: 'Go anywhere, get anything.',
        year: '2021',
        tags: ['Mobile', 'System'],
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000',
        color: '#000000'
    },
    {
        id: '7',
        name: 'Calvin Klein',
        client: 'CK',
        description: 'Fashion forward aesthetics.',
        year: '2022',
        tags: ['Brand', 'E-com'],
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000',
        color: '#495057'
    },
    {
        id: '8',
        name: 'Pitch',
        client: 'Pitch',
        description: 'Collaborative presentations.',
        year: '2023',
        tags: ['SaaS', 'Web'],
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
        color: '#4361ee'
    },
    {
        id: '9',
        name: 'Headspace',
        client: 'Headspace',
        description: 'Meditation made simple.',
        year: '2020',
        tags: ['App', 'Wellness'],
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
        color: '#fca311'
    },
];

export const DEFAULT_PROJECT: Project = {
    id: 'default',
    name: 'MetaDev',
    client: 'Agency',
    description: 'Designing the future of digital interaction.',
    year: '2025',
    tags: ['Agency', 'Showcase'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    color: '#3B2F63'
};

export const MENU_ITEMS: MenuItem[] = [
    { label: 'What We Do', href: '#what-we-do', description: 'Services & Capabilities' },
    { label: 'About Us', href: '#about', description: 'Our Culture & Team' },
    { label: 'Latest News', href: '#news', description: 'Updates & Press' },
    { label: 'Get in Touch', href: '#contact', description: 'Start a Project' },
];

export const NEWS_ITEMS: NewsItem[] = [
    { id: '1', date: 'Jul 2025', title: 'PlayerZero raises $15M in a Series A funding round', category: 'News', image: 'https://picsum.photos/400/300?grayscale' },
    { id: '2', date: 'Jun 2025', title: 'Designing a New Relationship with AI by Sara Vienna', category: 'Thought Leadership', image: 'https://picsum.photos/401/300?grayscale' },
    { id: '3', date: 'Jan 2025', title: 'MetaDev named Design Company of the Year finalist', category: 'Awards', image: 'https://picsum.photos/402/300?grayscale' },
    { id: '4', date: 'Dec 2024', title: 'Our Windsurf case study', category: 'Case Study', image: 'https://picsum.photos/403/300?grayscale' },
    { id: '5', date: 'Nov 2024', title: 'Scaling Design Systems for Enterprise', category: 'Engineering', image: 'https://picsum.photos/404/300?grayscale' },
];
