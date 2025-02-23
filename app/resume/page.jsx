"use client";

import React from 'react';
import {motion} from "framer-motion";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FaHtml5, FaCss3, FaReact, FaFigma, FaJs, FaGithub, FaCss3Alt} from 'react-icons/fa';
import {RiNextjsLine} from "react-icons/ri";
import {TbBrandPrisma} from "react-icons/tb";
import {SiTypescript, SiRedux, SiTailwindcss, SiWebpack, SiNextdotjs} from "react-icons/si";

const about = {
    title: "About me",
    description: "Passionate Frontend Developer with hands-on experience in modern web technologies.",
    info: [
        {fieldName: "Name:", fieldValue: " Serhii Kuznetsov"},
        {fieldName: "Phone:", fieldValue: " (067) 715-75-91"},
        {fieldName: "Experience:", fieldValue: " 3+ Years"},
        {fieldName: "Telegram:", fieldValue: " anFleek"},
        {fieldName: "Open to work:", fieldValue: " Yes"},
        {fieldName: "Email:", fieldValue: " f1erfly@outlook.com"},
        {fieldName: "skype:", fieldValue: " with_speedy"},
        {fieldName: "Languages:", fieldValue: " Ukrainian, English"},

    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Skilled Front-End Developer with expertise in building responsive, user-friendly interfaces.",
    items: [
        {company: "Peiko", position: "Front-End Developer", duration: "2022-2024"}
    ]
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "My academic background in Computer Science and Front-End Development.",
    items: [
        {
            institution: "Kyiv National University of Construction and Architecture",
            degree: "Bachelor’s degree in Computer Sciences",
            duration: "2014-2018"
        },
        {
            institution: "Kyiv National University of Construction and Architecture",
            degree: "Master’s degree in Computer Sciences",
            duration: "2018-2019"
        },
        {institution: "dev{education}", degree: "Programming Course Front-End", duration: "2019-2020"},
        {institution: "Web Design UI/UX", degree: "Programming Course Front-End", duration: "2024-2024"},
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
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList
                        className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li
                                                key={index}
                                                className="bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration} </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li
                                                key={index}
                                                className="bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.degree} </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[20px] text-center lg:text-left">{item.duration}</h3>
                                                <div className="flex items-center gap-3">
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
                            <div className="flex flex-col gap-[30px]">
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
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
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
