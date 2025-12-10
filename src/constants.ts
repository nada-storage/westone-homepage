import type { Project, NewsItem, MenuItem } from './types';

export const PROJECTS: Project[] = [
    {
        id: '1', // Ro
        name: 'Ro',
        client: 'Ro',
        description: 'Building a goals-based healthcare offering that feels deeply personal.',
        year: '2023',
        tags: ['Product Design', 'Engineering', 'Brand'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
        color: '#fca5a5',
        // Showcase Fields
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
    },
    {
        id: '2', // Atoms
        name: 'Atoms',
        client: 'Atoms',
        description: 'Creating the official Atomic Habits app based on the best-selling book.',
        year: '2022',
        tags: ['Product Design', 'Strategy', 'Brand'],
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
        color: '#e76f51',
        // Showcase Fields
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
    },
    {
        id: '3', // Upwork
        name: 'Upwork',
        client: 'Upwork',
        description: 'Transforming the job board into the world\'s marketplace for work.',
        year: '2023',
        tags: ['Vision', 'Product Design'],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
        color: '#14a800',
        // Showcase Fields
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
    },
    {
        id: '4', // The Atlantic
        name: 'The Atlantic',
        client: 'The Atlantic',
        description: 'Reimagining one of the world\'s most historically significant publications.',
        year: '2024',
        tags: ['Product Design', 'Engineering'],
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000',
        color: '#d62828',
        // Showcase Fields
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
    },
    {
        id: '5', // Suno
        name: 'Suno',
        client: 'Suno',
        description: 'Democratizing the music creation process with a prompt-to-song platform.',
        year: '2024',
        tags: ['Product Design', 'Brand', 'Engineering'],
        image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1000',
        color: '#7209b7',
        // Showcase Fields
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
    },
    {
        id: '6', // Uber
        name: 'Uber',
        client: 'Uber',
        description: 'Product Design, Engineering for the world\'s largest mobility platform.',
        year: '2021',
        tags: ['Service Design', 'Mobile App'],
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000',
        color: '#000000',
        // Showcase Fields
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
    },
    {
        id: '7', // Calvin Klein (Using Midjourney config as default replacement for style)
        name: 'Calvin Klein',
        client: 'CK',
        description: 'Fashion forward aesthetics.',
        year: '2022',
        tags: ['Brand', 'E-com'],
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000',
        color: '#495057',
        // Showcase Fields
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
    },
    {
        id: '8', // Pitch (Using generic config)
        name: 'Pitch',
        client: 'Pitch',
        description: 'Collaborative presentations.',
        year: '2023',
        tags: ['SaaS', 'Web'],
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
        color: '#4361ee',
        // Showcase Fields
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
    },
    {
        id: '9', // Headspace
        name: 'Headspace',
        client: 'Headspace',
        description: 'Meditation made simple.',
        year: '2020',
        tags: ['App', 'Wellness'],
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
        color: '#fca311',
        // Showcase Fields
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
