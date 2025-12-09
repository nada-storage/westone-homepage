export interface Project {
    id: string;
    name: string;
    client: string;
    description: string;
    year: string;
    tags: string[];
    image: string;
    color: string;
}

export interface NewsItem {
    id: string;
    date: string;
    title: string;
    category: string;
    image?: string;
}

export interface MenuItem {
    label: string;
    href: string;
    description: string;
}

export interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}
