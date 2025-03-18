"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'Frontend & Design',
        title: 'Scrap Metal and Recycling Website',
        description:
            '✅ Developed a modern and SEO-optimized website for a scrap metal and recycling company.\n' +
            '✅ Implemented a smooth navigation experience.\n' +
            '✅ Added contact forms with Telegram integration for quick customer inquiries.\n' +
            '✅ The site ensures responsiveness, fast performance, and a professional design.',
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }, { name: "HTML 5" }],
        images: ['/assets/work/Scrap-metal.png'],
        live: "https://scrap-metal-ten.vercel.app/",
        github: "https://github.com/f1erfly94/Scrap-metal"
    },
    {
        num: '02',
        category: 'Frontend & Design',
        title: 'Music Web App',
        description:
            '✅ Developed a dynamic fan website dedicated to Linkin Park, featuring an interactive discography, album pages.\n' +
            '✅ Integrated Spotify API for real-time album and song data.\n' +
            '✅ Added smooth animations, a responsive design, and a modern UI using Next.js and Tailwind CSS.\n' +
            '✅ Implemented a parallax effect and audio player.',
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }, { name: "HTML 5" }],
        images: ['/assets/work/LP.png'],
        live: "https://music-web-app-rho.vercel.app/",
        github: "https://github.com/f1erfly94/music-web-app"
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSliceChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <div className="text-white/60 whitespace-pre-line">{project.description}</div>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent hover:scale-110 transition-transform">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20" />
                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight
                                                    className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSliceChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div
                                        className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                                        </div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.images[0]}
                                                fill
                                                className="object-cover"
                                                alt="Project image"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;