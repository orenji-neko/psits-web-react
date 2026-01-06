import type { LucideIcon } from "lucide-react";

export interface HomeBannerData {
    title: {
        normal: string;
        highlight: string;
    };
    description: string;
    buttons: {
        primary: string;
        secondary: string;
    };
    image: {
        alt: string;
    };
}

export interface CoreValue {
    title: string;
    keywords: string;
    icon: LucideIcon;
}

export interface GetInvolvedCard {
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    className: string;
}

export interface GetInvolvedData {
    header: {
        subtitle: string;
        titlePrefix: string;
        titleSuffix: string;
        description: string;
        memberCount: string;
    };
    cards: GetInvolvedCard[];
}

export interface Goal {
    title: string;
    description: string;
}

export interface GoalSectionData {
    title: string;
    subtitle: string;
    goals: Goal[];
}

export interface UCData {
    title: string;
    subtitle: string;
    stats: { value: string; label: string; }[];
    mission: string;
    vision: string;
}

export interface CCSData {
    title: string;
    subtitle: string;
    mission: string;
    vision: {
        intro: string;
        points: string[];
    };
}

export interface InstitutionalIdentityData {
    uc: UCData;
    ccs: CCSData;
}

export interface DeansMessageData {
    header: {
        subtitle: string;
        title: string;
    };
    paragraphs: string[];
    signature: {
        name: string;
        role: string;
    };
}

export interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
    description?: string;
}

export interface PastEvent {
    id: number;
    title: string;
    date: { month: string; day: string };
    location: string;
    image: string;
    description?: string;
}

export interface UpcomingEventsData {
    header: {
        title: string;
        year: string;
    };
    events: UpcomingEvent[];
}

export interface PastEventsData {
    header: {
        title: string;
        year: string;
    };
    events: PastEvent[];
}


export interface Member {
    name: string;
    role: string;
    image: string;
    socials?: { email?: string; github?: string; };
}

export interface OrganizationTab {
    id: string;
    label: string;
    title: string;
    description: string;
    content: string;
    image: string;
    advisors: Member[];
    officers: Member[];
    developers: Member[];
    volunteers: Member[];
}

export interface OrganizationSectionData {
    header: {
        subtitle: string;
        title: {
            normal: string;
            highlight: string;
        };
    };
    tabs: OrganizationTab[];
}
