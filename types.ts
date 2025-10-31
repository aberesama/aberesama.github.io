import React from 'react';

export type Page = 'About' | 'Resume' | 'Portfolio' | 'Blog' | 'Contact';

export interface PersonalInfo {
    name: string;
    title: string;
    avatarUrl: string;
    email: string;
    phone: string;
    location: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface TimelineItem {
    date: string;
    title: string;
    institution: string;
    description?: string;
    items?: string[];
}

export interface Skill {
    name: string;
    level: number;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    description: string;
    details: {
        client?: string;
        date?: string;
        url?: string;
    };
    gallery?: string[];
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    imageUrl: string;
    content: string;
}

export interface Certification {
    title: string;
    items: string[];
}

export interface Testimonial {
    name: string;
    title: string;
    avatarUrl: string;
    quote: string;
}