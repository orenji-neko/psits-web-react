import Dennis from '../assets/Faculty/15.png';
import Jia from '../assets/Faculty/16.png';
import Tadlip from '../assets/Core Officers 2025/1.png';
import Tuyor from '../assets/Core Officers 2025/2.png';
import Alon from '../assets/Core Officers 2025/3.png';
import Español from '../assets/Core Officers 2025/5.png';
import Peresores from '../assets/Core Officers 2025/6.png';
import Laygan from '../assets/Core Officers 2025/7.png';
import Penera from '../assets/Core Officers 2025/9.png';
import Postrero from '../assets/Core Officers 2025/8.png';
import Cabunilas from '../assets/Core Officers 2025/10.png';
import Laurito from '../assets/Core Officers 2025/13.png';
import Rallos from '../assets/Core Officers 2025/12.png';
import Villanueva from '../assets/Core Officers 2025/14.png';
import Genabio from '../assets/Development Team 2025/28.png';
import Napisa from '../assets/Development Team 2025/19.png';
import Dilao from '../assets/Development Team 2025/17.png';
import Igot from '../assets/Development Team 2025/18.png';
import Alin from '../assets/Development Team 2025/20.png';
import Barral from '../assets/Development Team 2025/22.png';
import Laroco from '../assets/Development Team 2025/21.png';
import Albeos from '../assets/Development Team 2025/23.png';
import type { OrganizationSectionData } from "../@types/sections";

export const organizationSectionData: OrganizationSectionData = {
    header: {
        subtitle: "The heartbeat of digital innovation",
        title: {
            normal: "Our",
            highlight: "Organization"
        },
    },
    tabs: [
        {
            id: "psits",
            label: "PSITS",
            title: "Philippine Society of I.T. Students",
            description: "The primary student organization for Information Technology students, focusing on technical excellence and professional development.",
            content: "PSITS serves as the umbrella organization for all IT students, providing a platform for growth, collaboration, and innovation through various technical workshops, seminars, and networking events.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
            advisors: [
                {
                    name: "Engr. Dennis Durano",
                    role: "PSITS Adviser",
                    image: Dennis,
                    socials: { email: "jane@example.com" }
                },
                {
                    name: "Jia Nova B. Montecino",
                    role: "PSITS Adviser",
                    image: Jia,
                    socials: { email: "jane@example.com" }
                }
            ],
            officers: [
                {
                    name: "Marlou Tadlip",
                    role: "President",
                    image: Tadlip,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Clint Louie Tuyor",
                    role: "Vice President Internal",
                    image: Tuyor,
                    socials: { email: "james@example.com", github: "james" }
                },
                {
                    name: "Ralph Theodore Alon",
                    role: "Vice President External",
                    image: Alon,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "James Doe",
                    role: "Secretary",
                    image: Alon,
                    socials: { email: "james@example.com", github: "james" }
                },
                {
                    name: "Khrysha Español",
                    role: "Assistant Treasurer",
                    image: Español,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Raiza Mae Peresores",
                    role: "Auditor",
                    image: Peresores,
                    socials: { email: "james@example.com", github: "james" }
                },
                {
                    name: "Daisy Lyn Laygan",
                    role: "Treasurer",
                    image: Laygan,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Kisses Peñera",
                    role: "Chief Volunteer",
                    image: Penera,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Angela Postrero",
                    role: "Public Information Officer",
                    image: Postrero,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Vince Bryant Cabunilas",
                    role: "Public Relations Officer",
                    image: Cabunilas,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Jamaica Esgana",
                    role: "First Year Representative",
                    image: Penera,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Lee Vincent Laurito",
                    role: "Second Year Representative",
                    image: Laurito,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Christ Hanzen Rallos",
                    role: "Third Year Representative",
                    image: Rallos,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
                {
                    name: "Princess Villanueva",
                    role: "Fourth Year Representative",
                    image: Villanueva,
                    socials: { email: "jacinth@example.com", github: "jacinth" }
                },
            ],
            developers: [
                {
                    name: "Anton James Genabio",
                    role: "Former Head Developer",
                    image: Genabio,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Marriane Joy Napisa",
                    role: "Project Manager",
                    image: Napisa,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Ralph Adriane Dilao",
                    role: "Lead Developer",
                    image: Dilao,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Vince Clave Igot",
                    role: "Fullstack Developer",
                    image: Igot,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Ram Riley Alin",
                    role: "Backend Developer",
                    image: Alin,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Jacinth Cedric Barral",
                    role: "Backend Developer",
                    image: Barral,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Jan Lorenz Laroco",
                    role: "Frontend Developer",
                    image: Laroco,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Froilan Kim Edem",
                    role: "Fullstack Developer",
                    image: Barral,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Arvin Albeos",
                    role: "Quality Assurance",
                    image: Albeos,
                    socials: { github: "johnsmith" }
                },
                {
                    name: "Luke Harvey Umpad",
                    role: "UI/UX Designer",
                    image: Barral,
                    socials: { github: "johnsmith" }
                },
            ],
            volunteers: [
                {
                    name: "Alice Johnson",
                    role: "Event Volunteer",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
                }
            ]
        }
    ]
};
