"use client";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

interface Experience {
    title: string;
    company_name: string;
    date: string;
    icon: string;
    iconBg: string;
    points: string[];
}

interface ExperienceCardProps {
    experience: Experience;
}

const variants = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
        },
    },
};

const experiences: Experience[] = [
    {
        title: "React JS Developer",
        company_name: "iGenerate Technology",
        icon: "/my-portfolio/images/company/igenerate.png",
        iconBg: "#E6DEDD",
        date: "May 2023 - Dec 2024",
        points: [
            "Implemented advanced state management techniques using Redux Toolkit & Redux-saga",
            "Integrated RESTful & GraphQL APIs, optimized network requests for better performance and efficiency.",
        ],
    },
    {
        title: "Front End Developer Trainee",
        company_name: "Technomark",
        icon: "/my-portfolio/images/company/techno.png",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Apr 2023",
        points: [
            "Developed reusable React components, state management with Context API, Utilized React Router for dynamic routing.",
            "Performed debugging, code reviews, and improved performance of React applications.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "SoftCoding Solution",
        icon: "/my-portfolio/images/company/soft.png",
        iconBg: "#E6DEDD",
        date: "Jun 2022 - Jul 2022",
        points: [
            "Worked closely with CSS flexbox, grid layout and CSS media queries.",
            "Created a fully responsive portfolio website with modern CSS techniques (Flexbox, Grid, Media Queries).",
        ],
    },

    {
        title: "Future Ready Talent Intern",
        company_name: "Microsoft",
        icon: "/my-portfolio/images/company/micro.png",
        iconBg: "#E6DEDD",
        date: "Oct 2021 - Jun 2022",
        points: [
            "Tasked to complete Microsoft Azure self-learning modules.",
            "Created a Static Web App using Microsoft Azure Static Web Apps",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "LetsGrowMore",
        icon: "/my-portfolio/images/company/lgm.png",
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Sep 2021",
        points: [
            "Worked closely with the front end development concepts.",
            "Created a simple website and react Application with API data fetching.",
        ],
    },
];

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#2f0d68",
                color: "#ffffff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const WorkExperience = () => {
    return (
        <section id="work">
            <motion.div variants={variants}>
                <p className="pt-4 text-center text-slate-400">
                    What I have done so far
                </p>
                <h2 className="text-center text-white text-4xl font-bold">
                    Work Experience
                </h2>
            </motion.div>

            <div className='mt-12 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default WorkExperience;
