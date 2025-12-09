
export interface ProjectDetailContent {
    id: string;
    media: {
        hero: string;
        visionMain: string;
        visionGrid1: string;
        visionGrid2: string;
        auraBento: string;
        auraCard: string;
        featureInit: string;
        featureResult: string;
    };
    hero: {
        title: string;
        type: string;
        stage: string;
        deliverables: string;
    };
    intro: {
        text: string;
    };
    vision: {
        heading: string;
        text: string;
        image1Title: string;
        image1Subtitle: string;
        image3HoverText: string;
    };
    marquee: string;
    aura: {
        subheading: string;
        heading: string;
        text: string;
        bigText: string;
        card2Text: string;
    };
    feature: {
        subheading: string;
        heading: string;
        text: string;
    };
    discovery: {
        heading: string;
        items: { img: string; title: string }[];
    };
    stats: {
        stat1: { value: string; label: string };
        stat2: { value: string; label: string };
        stat3: { value: string; label: string };
    };
}

export const PROJECT_DETAILS: Record<string, ProjectDetailContent> = {
    '1': { // Ro
        id: '1',
        media: {
            hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000', // Ro Main
            visionMain: 'https://images.unsplash.com/photo-1576091160550-21733e99dbb9?q=80&w=2070&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop', // Wellness
            auraCard: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', // Texture similar
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
    },
    '2': { // Atoms
        id: '2',
        media: {
            hero: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', // Shoe Main
            visionMain: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop',
            auraCard: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2000&auto=format&fit=crop', // Fabric texture
            featureInit: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
            featureResult: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop'
        },
        hero: {
            title: 'Atoms',
            type: 'E-commerce',
            stage: 'Scale-up',
            deliverables: 'Brand Identity, Web Design'
        },
        intro: {
            text: 'Atoms is redefining the everyday shoe with quarter sizes and perfect fit.'
        },
        vision: {
            heading: 'The perfect fit for the modern world.',
            text: 'We worked with Atoms to create a digital experience that reflects their obsession with comfort and detail.',
            image1Title: 'Model 000',
            image1Subtitle: 'New Release',
            image3HoverText: 'Comfort'
        },
        marquee: 'Comfort • Style • Precision • Fit • ',
        aura: {
            subheading: 'Design Philosophy',
            heading: 'Simple on the surface, complex underneath.',
            text: 'A visual language that celebrates the subtle details and the magic of a perfect fit.',
            bigText: 'Fit.',
            card2Text: '"Walk on<br />Clouds."'
        },
        feature: {
            subheading: 'Customization',
            heading: 'Find your perfect size, down to the quarter.',
            text: 'A unique sizing system that ensures your shoes fit perfectly, every time.'
        },
        discovery: {
            heading: 'Discover the collection that changed how we walk.',
            items: [
                { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop", title: "Model 000" },
                { img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop", title: "Everyday" },
                { img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop", title: "Limited" },
                { img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070&auto=format&fit=crop", title: "Accessories" }
            ]
        },
        stats: {
            stat1: { value: '4.8', label: 'Average Rating' },
            stat2: { value: '250k', label: 'Pairs Sold' },
            stat3: { value: '1/4', label: 'Size Precision' }
        }
    },
    '3': { // Upwork
        id: '3',
        media: {
            hero: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
            visionMain: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
            auraCard: 'https://images.unsplash.com/photo-1558223694-a169b122f83d?q=80&w=2000&auto=format&fit=crop',
            featureInit: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
            featureResult: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
        },
        hero: {
            title: 'Upwork',
            type: 'Platform',
            stage: 'Enterprise',
            deliverables: 'System Design, Strategy'
        },
        intro: {
            text: 'Upwork connects businesses with independent talent to create a new way of working.'
        },
        vision: {
            heading: 'Powering the future of work.',
            text: 'We redesigned the core experience to make collaboration between remote teams seamless and efficient.',
            image1Title: 'Global Talent',
            image1Subtitle: 'Active Now',
            image3HoverText: 'Connect'
        },
        marquee: 'Work • Connect • Grow • Succeed • ',
        aura: {
            subheading: 'Global Network',
            heading: 'Talent has no borders.',
            text: 'Visualizing the invisible threads that connect businesses and talent around the globe.',
            bigText: 'Work.',
            card2Text: '"Talent<br />Anywhere."'
        },
        feature: {
            subheading: 'Collaboration',
            heading: 'Tools that make remote work feel local.',
            text: 'Integrated communication and management tools to keep projects on track.'
        },
        discovery: {
            heading: 'Explore a world of expertise at your fingertips.',
            items: [
                { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", title: "Development" },
                { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop", title: "Design" },
                { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", title: "Marketing" },
                { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", title: "Writing" }
            ]
        },
        stats: {
            stat1: { value: '$3B+', label: 'Freelancer Earnings' },
            stat2: { value: '180', label: 'Countries' },
            stat3: { value: '#1', label: 'Talent Solution' }
        }
    },
    '4': { // The Atlantic
        id: '4',
        media: {
            hero: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
            visionMain: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1470790376778-a9fcd484f043?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop', // Newspaper/print vibe
            auraCard: 'https://images.unsplash.com/photo-1555449377-5463134a5371?q=80&w=2000&auto=format&fit=crop',
            featureInit: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
            featureResult: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop'
        },
        hero: {
            title: 'The Atlantic',
            type: 'Media',
            stage: 'Legacy',
            deliverables: 'App Design, Digital Strategy'
        },
        intro: {
            text: 'The Atlantic is bringing 160 years of journalism into the digital age.'
        },
        vision: {
            heading: 'Illuminating context in a complex world.',
            text: 'We created a reading experience that honors the legacy of print while embracing digital possibilities.',
            image1Title: 'Deep Dive',
            image1Subtitle: 'Featured Issue',
            image3HoverText: 'Read'
        },
        marquee: 'Read • Think • Understand • Question • ',
        aura: {
            subheading: 'Editorial Design',
            heading: 'Typography as a voice.',
            text: 'A rigorous typographic system that provides clarity and authority to every article.',
            bigText: 'Truth.',
            card2Text: '"Stories<br />Matter."'
        },
        feature: {
            subheading: 'Reader Experience',
            heading: 'Distraction-free reading for deep focus.',
            text: 'An interface designed to recede, letting the journalism take center stage.'
        },
        discovery: {
            heading: 'Journalism that challenges and informs.',
            items: [
                { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop", title: "Politics" },
                { img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop", title: "Culture" },
                { img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop", title: "Technology" },
                { img: "https://images.unsplash.com/photo-1470790376778-a9fcd484f043?q=80&w=2070&auto=format&fit=crop", title: "Science" }
            ]
        },
        stats: {
            stat1: { value: '160+', label: 'Years of History' },
            stat2: { value: '3', label: 'Pulitzer Prizes' },
            stat3: { value: 'Top', label: 'Digital Magazine' }
        }
    },
    '5': { // Suno (Original)
        id: '5',
        media: {
            hero: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop',
            visionMain: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
            auraCard: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
            featureInit: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2070&auto=format&fit=crop',
            featureResult: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop'
        },
        hero: {
            title: 'Suno',
            type: 'Full Build',
            stage: 'Startup',
            deliverables: 'Product Design, Brand, Engineering'
        },
        intro: {
            text: 'Suno is breaking down barriers and unlocking a new generation of music with their prompt-to-song technology.'
        },
        vision: {
            heading: 'Create a destination where everyone has the tools to transform into an artist.',
            text: 'Our partnership with Suno was built on a shared vision and goals. In such a disruptive space, speed was key—made possible by mutual trust.',
            image1Title: 'Neon Dreams',
            image1Subtitle: 'Now Playing',
            image3HoverText: 'Collaborate'
        },
        marquee: 'Imagine • Generate • Listen • Remix • ',
        aura: {
            subheading: 'The Aura of Music',
            heading: 'Nostalgia meets the magic of the unexpected.',
            text: 'We designed a dynamic system of gradients and grain that serves as an abstract representation of the feeling of being wonderstruck by music.',
            bigText: 'Vibe.',
            card2Text: '"Make it pop,<br />Make it snap."'
        },
        feature: {
            subheading: 'Song Creation',
            heading: 'Democratizing music creation through text, visual, and audio prompts.',
            text: 'Imagine it, type it, and let Suno surprise you. With just a few words in the text prompt and a little help from prompt assistance, an idea can seamlessly transform into a complete song.'
        },
        discovery: {
            heading: 'The power of discovering new music positions Suno as a home for both creators and listeners.',
            items: [
                { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", title: "Global Top 50" },
                { img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop", title: "Trending Now" },
                { img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop", title: "New Arrivals" },
                { img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop", title: "Editor's Pick" }
            ]
        },
        stats: {
            stat1: { value: '4.9', label: 'Star rating on App Store' },
            stat2: { value: '43K', label: 'Ratings on App Store' },
            stat3: { value: 'T10', label: 'Top performing apps in Music' }
        }
    },
    '6': { // Uber
        id: '6',
        media: {
            hero: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
            visionMain: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2070&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1549488352-22668e9e6c1c?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1558223694-a169b122f83d?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop', // Travel
            auraCard: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
            featureInit: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
            featureResult: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2070&auto=format&fit=crop'
        },
        hero: {
            title: 'Uber',
            type: 'System',
            stage: 'Global',
            deliverables: 'Design System, Mobile'
        },
        intro: {
            text: 'Uber changed how the world moves. We helped them scale their design system to match.'
        },
        vision: {
            heading: 'Setting the standard for mobility.',
            text: 'We collaborated with the Uber team to refine their mobile experience and underlying design infrastructure.',
            image1Title: 'Request Ride',
            image1Subtitle: 'Arriving Now',
            image3HoverText: 'Go Anywhere'
        },
        marquee: 'Move • Ride • Eat • Go • ',
        aura: {
            subheading: 'System Design',
            heading: 'Motion as a language.',
            text: 'Defining how elements move and interact to create a cohesive experience across all Uber products.',
            bigText: 'Move.',
            card2Text: '"Go<br />Anywhere."'
        },
        feature: {
            subheading: 'Request Flow',
            heading: 'Simplifying the complex logistics of movement.',
            text: 'Optimizing the pickup and drop-off experience to reduce friction and increase reliability.'
        },
        discovery: {
            heading: 'Moving people and things where they need to go.',
            items: [
                { img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop", title: "Rides" },
                { img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2070&auto=format&fit=crop", title: "Eats" },
                { img: "https://images.unsplash.com/photo-1549488352-22668e9e6c1c?q=80&w=2070&auto=format&fit=crop", title: "Freight" },
                { img: "https://images.unsplash.com/photo-1558223694-a169b122f83d?q=80&w=2070&auto=format&fit=crop", title: "Safety" }
            ]
        },
        stats: {
            stat1: { value: '10B+', label: 'Trips Completed' },
            stat2: { value: '71', label: 'Countries' },
            stat3: { value: '93M', label: 'Active Users' }
        }
    },
    '7': { // Calvin Klein
        id: '7',
        media: {
            hero: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
            visionMain: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2070&auto=format&fit=crop',
            visionGrid1: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop',
            visionGrid2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
            auraBento: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop',
            auraCard: 'https://images.unsplash.com/photo-15096311408-e9970c18af7c?q=80&w=2070&auto=format&fit=crop',
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
    },
    '8': { // Pitch
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
    },
    '9': { // Headspace
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
    }
};
