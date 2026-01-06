import type { GoalSectionData, InstitutionalIdentityData, DeansMessageData } from "../@types/sections";

export const goalSectionData: GoalSectionData = {
    title: "Goals",
    subtitle: "What we strive to achieve",
    goals: [
        {
            title: "Ethical Development",
            description: "Promotes scholarly endeavors for the promotion of moral, social, cultural, and environmental interests."
        },
        {
            title: "Career",
            description: "Meets the demands of the industry in terms of technical, personal and interpersonal skills."
        },
        {
            title: "Resource Optimization",
            description: "Optimizes the use of appropriate and advanced resources and services."
        },
        {
            title: "Research",
            description: "Conducts intellectual, technological and significant researches in computing."
        }
    ]
};

export const institutionalIdentityData: InstitutionalIdentityData = {
    uc: {
        title: "University of Cebu",
        subtitle: "Mission & Vision",
        stats: [
            { value: "60,000+", label: "students" },
            { value: "1964", label: "founded" },
            { value: "9", label: "departments" }
        ],
        mission: "The University offers affordable and quality education responsive to the demands of local and international communities.",
        vision: "Democratize quality education. Be the visionary and industry leader. Give hope and transform lives."
    },
    ccs: {
        title: "College of Computer Studies",
        subtitle: "Mission & Vision",
        mission: "We envision being the hub of quality, globally-competitive and socially-responsive information technology education.",
        vision: {
            intro: "We commit to continuously:",
            points: [
                "Offer relevant programs that mold well-rounded computing professionals",
                "Engage in accreditation and quality standards;",
                "Facilitate in building an IT-enabled nation."
            ]
        }
    }
};

export const deansMessageData: DeansMessageData = {
    header: {
        subtitle: "Leadership",
        title: "Dean's Message"
    },
    paragraphs: [
        "As the Dean of our esteemed college, we're thrilled to have you here. I am committed to fostering a supportive and dynamic learning environment where you can thrive.",
        "Explore the many opportunities available, from internships to hackathons, to gain valuable real-world experience and develop your skills. We encourage active participation and collaboration – your voice matters!",
        "We're here to help you succeed in this ever-evolving field. Best wishes for an amazing academic journey!"
    ],
    signature: {
        name: "Mr. Neil Basabe",
        role: "Dean - UC Main CSS"
    }
};
