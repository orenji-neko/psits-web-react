import Orientation from '../assets/orientation2025/1.jpg';
import ICT from '../assets/ict-congress/1.jpg';
import Blockchain from '../assets/cbc/1.jpg';
import CCSDays from '../assets/awarding/1.jpg';
import Nihonggo from '../assets/nihonggo/1.jpg';
import EmbeddedSystems from '../assets/embedded/1.jpg';
import UCCCSCares from '../assets/embedded/1.jpg';
import UCIntramurals from '../assets/intramurals/1.jpg';
import CCSAcquaintance from '../assets/akwe/CCS 4 (28).jpg';
import type { UpcomingEventsData, PastEventsData } from "../@types/sections";

export const upcomingEventsData: UpcomingEventsData = {
    header: {
        title: "Upcoming Events",
        year: "2026"
    },
    events: [
        {
            id: 1,
            title: "Acquaintance Party",
            date: "11 August - 5:00 PM",
            location: "SM Seaside City Cebu",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "CCS Days",
            date: "25 February - 8:00 AM",
            location: "University of Cebu - Main Campus",
            image: "https://images.unsplash.com/photo-1540575861501-7ce0e22022f9?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "UC Intramurals",
            date: "12 March - 7:00 AM",
            location: "University of Cebu - Main Campus",
            image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Programming Competition",
            date: "15 April - 9:00 AM",
            location: "CCS Laboratory",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        }
    ]
};

export const pastEventsData: PastEventsData = {
    header: {
        title: "Past Events",
        year: "2025"
    },
    events: [
        {
            id: 1,
            title: "CCS Orientation 2025",
            location: "University of Cebu Main Campus",
            date: { month: "August", day: "20" },
            description: "The College of Computer Studies (CCS) at the University of Cebu Main Campus warmly welcomed its new batch of students during the CCS Orientation 2025 held on August 20, 2025. The event was designed to introduce freshmen to the college's programs, faculty, and student organizations.",
            image: Orientation,
        },
        {
            id: 2,
            title: "11th ICT Congress 2025",
            location: "SM Seaside City Cebu",
            date: { month: "April", day: "12" },
            description: "The 11th ICT Congress 2025 at SM Seaside City Cebu was a landmark event that brought together IT enthusiasts, professionals, and students from across the region. The congress featured a series of keynote speeches, panel discussions, and workshops focused on the latest trends and innovations in information and communication technology.",
            image: ICT,
        },
        {
            id: 3,
            title: "CCS Days",
            location: "University of Cebu Main Campus",
            date: { month: "February", day: "12" },
            description: "CCS Days at the University of Cebu Main Campus was a vibrant celebration of technology, creativity, and community spirit. The event spanned several days and featured a variety of activities including coding competitions, hackathons, tech talks, and exhibitions showcasing student projects.",
            image: CCSDays,
        },
        {
            id: 4,
            title: "Cebu Blockchain Conference 2025",
            location: "IEC Convention Center Cebu",
            date: { month: "January", day: "17" },
            description: "The Cebu Blockchain Conference 2025 held at the IEC Convention Center Cebu was a groundbreaking event that delved into the transformative potential of blockchain technology. The conference attracted industry leaders, developers, entrepreneurs, and enthusiasts eager to explore the applications and implications of blockchain across various sectors.",
            image: Blockchain,
        },
        {
            id: 5,
            title: "Nihonggo Culminating Activity 2024",
            location: "University of Cebu Main Campus",
            date: { month: "December", day: "17" },
            description: "The Nihonggo Culminating Activity 2024 at the University of Cebu Main Campus was a festive event that marked the conclusion of the Nihonggo language program for the year. The activity showcased the progress and achievements of students who had been studying the Japanese language and culture throughout the semester.",
            image: Nihonggo,
        },
        {
            id: 6,
            title: "Embedded Systems and IOT Project Exhibit 2024",
            location: "University of Cebu Main Campus",
            date: { month: "November", day: "17" },
            description: "The Embedded Systems and IoT Project Exhibit 2024 at the University of Cebu Main Campus was an exciting event that highlighted the innovative projects developed by students in the fields of embedded systems and the Internet of Things (IoT). The exhibit provided a platform for students to showcase their creativity, technical skills, and problem-solving abilities.",
            image: EmbeddedSystems,
        },
        {
            id: 7,
            title: "UC CCS Cares and Internship 2024",
            location: "University of Cebu Main Campus",
            date: { month: "November", day: "17" },
            description: "The UC CCS Cares and Internship 2024 program at the University of Cebu Main Campus was a commendable initiative that combined community service with practical work experience for students. The program aimed to foster a sense of social responsibility among students while providing them with valuable insights into their future careers.",
            image: UCCCSCares,
        },
        {
            id: 8,
            title: "UC Intramurals",
            location: "University of Cebu Main Campus",
            date: { month: "November", day: "20" },
            description: "The UC Intramurals at the University of Cebu Main Campus was a lively event that brought together students from various departments to compete in a range of sports and recreational activities. The intramurals fostered camaraderie, sportsmanship, and school spirit among participants and spectators alike.",
            image: UCIntramurals,
        },
        {
            id: 9,
            title: "CCS Acquaintance Party 2024",
            location: "SM Seaside City Cebu",
            date: { month: "November", day: "16" },
            description: "On November 16, 2024, the CCS Acquaintance Party brought together students, faculty, and alumni at SM Seaside City Cebu for a night inspired by the timeless allure of the Old Money theme. The event was a celebration of camaraderie, elegance, and the rich heritage of the College of Computer Studies (CCS) community.",
            image: CCSAcquaintance,
        },
    ]
};
