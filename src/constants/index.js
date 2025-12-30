
// Use Lucide for icons mostly, but for skills/projects we might need specific pngs or SVGs.
// Since I can't generate specific icons easily, I'll use Lucide icons or placeholder images.

import {
    Code2,
    Database,
    Layout,
    Server,
    Smartphone,
    Terminal,
    Globe,
    Cpu,
    Palette,
    Figma,
    Github,
    Linkedin,
    Instagram,
    Twitter
} from "lucide-react";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "design",
        title: "Design",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Developer",
        icon: Code2,
    },
    {
        title: "UI/UX Designer",
        icon: Layout,
    },
    {
        title: "System Analysis",
        icon: Server,
    },
    {
        title: "Product Design",
        icon: Palette,
    },
];

const technologies = [
    {
        name: "C",
        icon: Terminal,
        color: "#555555"
    },
    {
        name: "C++",
        icon: Code2,
        color: "#00599C"
    },
    {
        name: "C#",
        icon: Code2,
        color: "#9b59b6"
    },
    {
        name: "MySQL",
        icon: Database,
        color: "#00758F"
    },
    {
        name: "Git",
        icon: Github,
        color: "#F05032"
    },
    {
        name: "Figma",
        icon: Figma,
        color: "#F24E1E"
    },
    {
        name: "JavaScript",
        icon: Globe,
        color: "#F7DF1E" // Simple placeholder
    },
];

const experiences = [
    {
        title: "Bachelor of Computer Science",
        company_name: "Conestoga College",
        icon: "school", // will handle in component
        iconBg: "#383E56",
        date: "2025 - 2027",
        points: [
            "Currently pursuing Bachelor of Computer Science with an impressive GPA.",
            "Key Coursework: Object-Oriented Programming, Data Structures & Algorithms, SDLC, Database Management, Computer Networks, UX Fundamentals.",
            "Developing strong foundation in C, C++, C# and modern software engineering methodologies.",
            "Collaborating on regular group projects, learning Agile practices and version control with Git."
        ],
    }
];

const projects = [
    {
        name: "Smart Parking System",
        description:
            "A real-time parking management system with dashboards, alerts, and role-based access control built using C# .NET and Clean Architecture principles.",
        tags: [
            {
                name: "c#",
                color: "blue-text-gradient",
            },
            {
                name: ".net",
                color: "green-text-gradient",
            },
            {
                name: "blazor",
                color: "pink-text-gradient",
            },
        ],
        image: "project1", // Placeholder
        source_code_link: "https://github.com/FenishPatel0245/smart_parking",
    },
    {
        name: "Car Racing Game",
        description:
            "A retro-style console ASCII racing game implemented in C++ demonstrating game loops, collision detection, and performance optimization.",
        tags: [
            {
                name: "c++",
                color: "blue-text-gradient",
            },
            {
                name: "console",
                color: "green-text-gradient",
            },
            {
                name: "game-dev",
                color: "pink-text-gradient",
            },
        ],
        image: "project2",
        source_code_link: "https://github.com/FenishPatel0245/Car_Game",
    },
    {
        name: "To-Do List Manager",
        description:
            "A robust CLI task management application focusing on file I/O operations, data structures, and efficient memory management.",
        tags: [
            {
                name: "c",
                color: "blue-text-gradient",
            },
            {
                name: "data-structures",
                color: "green-text-gradient",
            },
        ],
        image: "project3",
        source_code_link: "https://github.com/FenishPatel0245/to-do-list-manager",
    },
    {
        name: "Phone Orientation ML",
        description:
            "Machine learning-based orientation detector utilizing Nearest Neighbour classification algorithm to identify device state from sensor data.",
        tags: [
            {
                name: "c++",
                color: "blue-text-gradient",
            },
            {
                name: "ml",
                color: "green-text-gradient",
            },
            {
                name: "oop",
                color: "pink-text-gradient",
            },
        ],
        image: "project4",
        source_code_link: "https://github.com/FenishPatel0245/phone-orientation-detector-cpp",
    },
    {
        name: "Driver Analytics",
        description:
            "Collaborative software engineering group project focusing on analyzing driver behavior data, demonstrating team coordination and git workflow.",
        tags: [
            {
                name: "group-project",
                color: "blue-text-gradient",
            },
            {
                name: "analytics",
                color: "green-text-gradient",
            },
        ],
        image: "project5",
        source_code_link: "https://github.com/Shumroz2002/Group19F25",
    },
];

const designWorks = [
    {
        title: "Conference Poster",
        type: "Poster Design",
        tools: "Adobe Photoshop, Illustrator",
        description: "A professional academic conference poster designed for high readability and visual impact. Focus on typographic hierarchy and layout.",
        image: "design1"
    },
    {
        title: "Visa Information",
        type: "Visual Design",
        tools: "Figma, Illustrator",
        description: "Clear, accessible information design simplifying complex visa application processes into a user-friendly visual guide.",
        image: "design2"
    },
    {
        title: "Creative Branding",
        type: "Branding",
        tools: "Photoshop, Figma",
        description: "Exploration of color theory and modern composition techniques for a fictional brand identity campaign.",
        image: "design3"
    }
]

export { services, technologies, experiences, projects, designWorks };
