import React from 'react';

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

export interface ContactFormData {
    name: string;
    email: string;
    source: string;
    stage: string;
    message: string;
    newsletter: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    error?: string;
}
