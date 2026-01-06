import { Lightbulb, HeartHandshake, Award, Bell, Code2, Users2, BookOpen, Calendar, Trophy } from "lucide-react";
import type { HomeBannerData, CoreValue, GetInvolvedData } from "../@types/sections";

export const homeBannerData: HomeBannerData = {
    title: {
        normal: "Empowering",
        highlight: "future IT Professionals"
    },
    description: "We are a community of like-minded individuals who are passionate about technology and committed to making a difference in the world.",
    buttons: {
        primary: "Join Now",
        secondary: "Learn More"
    },
    image: {
        alt: "Hero Banner"
    }
};

export const coreValuesData: CoreValue[] = [
    {
        title: "Innovation",
        keywords: "Visionary • Leadership • Change",
        icon: Lightbulb,
    },
    {
        title: "Initiative",
        keywords: "Wit • Practicality • Ingenuity",
        icon: HeartHandshake,
    },
    {
        title: "Service",
        keywords: "Industry • Loyalty • Courtesy",
        icon: Award,
    },
];

export const getInvolvedData: GetInvolvedData = {
    header: {
        subtitle: "Join the Community",
        titlePrefix: "Get",
        titleSuffix: "Involved",
        description: "Learning, collaborating, and connecting within the organization. Join our community and shape the future of technology together.",
        memberCount: "500+"
    },
    cards: [
        {
            title: "Announcements",
            description: "Don't miss out! Stay updated on PSITS-hosted workshops, hackathons, and more events. Follow us for more details!",
            icon: Bell,
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
            className: "h-full"
        },
        {
            title: "Collaborations",
            description: "Unleash your potential! Aspiring Developers, collaborate with us on cutting-edge projects on GitHub.",
            icon: Code2,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            className: "h-full"
        },
        {
            title: "Social Connections",
            description: "Build friendships, find mentors, and grow your network. Connect with like-minded peers and future colleagues!",
            icon: Users2,
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop",
            className: "h-full"
        },
        {
            title: "Events & Activities",
            description: "From hackathons to seminars, participate in exciting events that sharpen your skills and expand your horizons.",
            icon: Calendar,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
            className: "h-full"
        },
        {
            title: "Learning Resources",
            description: "Access exclusive tutorials, study materials, and guides curated by fellow students and industry professionals.",
            icon: BookOpen,
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
            className: "h-full"
        },
        {
            title: "Competitions",
            description: "Challenge yourself in coding contests, UI/UX battles, and tech quizzes. Showcase your talents and win prizes!",
            icon: Trophy,
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
            className: "h-full"
        }
    ]
};
