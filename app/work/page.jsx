"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: 'project 1',
        stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: 'Javascript' }],
        image: '/assets/work/',
        live: "",
        github: "",
    },
];

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 x:order-2 xl:order-none">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {projects.num}
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] ">Coming soon...</div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
