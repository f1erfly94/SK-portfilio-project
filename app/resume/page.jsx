"use client";

import React from 'react';
import {motion} from "framer-motion";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FaHtml5, FaReact, FaFigma, FaJs, FaGithub, FaCss3Alt} from 'react-icons/fa';
import {TbBrandPrisma, TbBrandGit, TbTestPipe} from "react-icons/tb";
import {
    SiTypescript, SiRedux, SiTailwindcss, SiWebpack, SiNextdotjs,
    SiSass, SiFramer, SiGraphql, SiJest, SiVitest, SiChartdotjs,
    SiReactquery, SiVite, SiClaude, SiOpenai
} from "react-icons/si";
import {GiBearFace} from "react-icons/gi";

const about = {
    title: "About me",
    description: "Passionate Frontend Developer with hands-on experience in modern web technologies.",
    info: [
        {fieldName: "Name:", fieldValue: " Serhii Kuznetsov"},
        {fieldName: "Phone:", fieldValue: " +38 (067) 715-75-91", link: "tel:+380677157591"},
        {fieldName: "Experience:", fieldValue: " 4 Years"},
        {fieldName: "Telegram:", fieldValue: " Serhii_Kuznetsov05", link: "https://t.me/Serhii_Kuznetsov05"},
        {fieldName: "Open to work:", fieldValue: " Yes"},
        {fieldName: "Languages:", fieldValue: " Ukrainian, English"},
        {fieldName: "Email:", fieldValue: "serhii.kuznetsov05@gmail.com", link: "mailto:serhii.kuznetsov05@gmail.com"}

    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Skilled Front-End Developer with expertise in building responsive, user-friendly interfaces.",
    items: [
        {
            company: "Peiko",
            link: "https://peiko.space/",
            position: "Front-End Developer",
            duration: "2022-2024",
            stack: ["Next.js", "React", "TypeScript", "Zustand", "SCSS", "Framer Motion", "GraphQL", "Jest", "Vitest", "Git"],
            bullets: [
                "Developed responsive and accessible web applications using React, Next.js, and TypeScript with a mobile-first approach",
                "Built reusable UI components and design systems with SCSS and Framer Motion, improving development consistency across projects",
                "Implemented efficient state management using Zustand, optimizing application performance and scalability",
                "Integrated REST and GraphQL APIs, ensuring seamless communication between front-end and back-end services",
                "Collaborated closely with designers and back-end developers to deliver high-quality features and maintain code quality through peer reviews",
                "Covered shared UI components and utility logic with Jest and Vitest unit tests, raising confidence in refactors and reducing regressions before release",
            ],
        },
        {
            company: "Amazon Agency",
            link: null,
            position: "Front-End Developer",
            duration: "2025-2026",
            stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Chart.js", "TanStack Query", "Vite", "Playwright", "Vitest", "Claude", "ChatGPT"],
            bullets: [
                "Built front-end for automation tools that streamline Amazon ad campaign management across multiple client accounts",
                "Improved Core Web Vitals (LCP, CLS, INP) on client dashboards — achieved measurably faster perceived load times through code splitting, lazy loading, and image optimization",
                "Used Claude and ChatGPT to generate campaign performance summaries and ad copy suggestions integrated directly in the dashboard UI",
                "Created interactive data-rich components — campaign charts, KPI tables, real-time budget trackers — using Chart.js and custom React hooks",
                "Integrated Amazon Advertising and Product APIs; ensured WCAG 2.1 AA accessibility and full cross-browser compatibility",
                "Wrote end-to-end test suites with Playwright covering critical dashboard flows, and unit/component tests with Vitest to prevent regressions across releases",
            ],
        },
    ]
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "My academic background in Computer Science and Front-End Development.",
    items: [
        {
            institution: "Kyiv National University of Construction and Architecture",
            degree: "Bachelor's degree in Computer Sciences",
            duration: "2014-2018"
        },
        {
            institution: "Kyiv National University of Construction and Architecture",
            degree: "Master's degree in Computer Sciences",
            duration: "2018-2019"
        },
        {institution: "dev{education}", degree: "Programming Course Front-End", duration: "2021-2022"},
        {institution: "Playtech University", degree: "Web Design UI/UX Beginner course", duration: "2024-2024"},
    ]
};

const skills = {
    title: 'My skills',
    description: "Technologies and tools I work with:",
    skillList: [
        {icon: <FaHtml5/>, name: 'HTML5'},
        {icon: <FaCss3Alt/>, name: 'CSS3'},
        {icon: <FaReact/>, name: 'React'},
        {icon: <SiRedux/>, name: 'Redux'},
        {icon: <SiNextdotjs/>, name: 'Next.js'},
        {icon: <FaJs/>, name: 'JavaScript'},
        {icon: <SiTypescript/>, name: 'TypeScript'},
        {icon: <SiWebpack/>, name: 'Webpack '},
        {icon: <FaGithub/>, name: 'Github '},
        {icon: <SiTailwindcss/>, name: 'Tailwind CSS'},
        {icon: <TbBrandPrisma/>, name: 'Prisma'},
        {icon: <FaFigma/>, name: 'Figma'},
        {icon: <TbBrandGit/>, name: 'Git'},
        {icon: <SiSass/>, name: 'SCSS'},
        {icon: <GiBearFace/>, name: 'Zustand'},
        {icon: <SiFramer/>, name: 'Framer Motion'},
        {icon: <SiGraphql/>, name: 'GraphQL'},
        {icon: <SiJest/>, name: 'Jest'},
        {icon: <SiVitest/>, name: 'Vitest'},
        {icon: <TbTestPipe/>, name: 'Playwright'},
        {icon: <SiChartdotjs/>, name: 'Chart.js'},
        {icon: <SiReactquery/>, name: 'TanStack Query'},
        {icon: <SiVite/>, name: 'Vite'},
        {icon: <SiClaude/>, name: 'Claude'},
        {icon: <SiOpenai/>, name: 'ChatGPT'},
    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-start justify-center py-12 xl:py-24 "
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <TabsList
                        className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] ml-7 mr-7 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ml-7 mr-7">{experience.description}</p>
                                <ScrollArea className="h-auto">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li
                                                key={index}
                                                className="bg-[#27272c] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-accent">{item.duration} </p>
                                                    <p className="text-white/60">
                                                        - {item.link ? (
                                                        <a href={item.link} target="_blank"
                                                           rel="noopener noreferrer" className="underline">
                                                            {item.company}
                                                        </a>
                                                    ) : item.company}
                                                    </p>
                                                </div>
                                                <h3 className="text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">{item.position}</h3>
                                                {item.stack && (
                                                    <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center lg:justify-start mb-1">
                                                        {item.stack.map((tech, techIndex) => (
                                                            <span key={techIndex}
                                                                  className="text-xs text-accent/80 bg-accent/10 px-2 py-0.5 rounded">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                <ul className="list-disc pl-5 text-left">
                                                    {item.bullets.map((point, pointIndex) => (
                                                        <li key={pointIndex}>{point}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left mr-7 ml-7">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-auto">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li
                                                key={index}
                                                className="bg-[#27272c] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.degree} </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[20px] text-center lg:text-left">{item.duration}</h3>
                                                <div className="flex items-baseline gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] mr-7 ml-7">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {
                                        skills.skillList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger
                                                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div
                                                                className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about"
                                     className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px] mr-7 ml-7">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[980px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index}
                                                   className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            {item.link ? (
                                                <a href={item.link}
                                                   className="text-xl hover:text-accent transition-colors underline"
                                                   target={item.link.startsWith('https') ? "_blank" : ""}
                                                   rel={item.link.startsWith('https') ? "noopener noreferrer" : ""}>
                                                    {item.fieldValue}
                                                </a>
                                            ) : (
                                                <span className="text-xl">{item.fieldValue}</span>
                                            )}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;