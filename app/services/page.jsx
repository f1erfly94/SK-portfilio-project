"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Building modern, responsive, and scalable websites and web applications to meet business needs.",
        href: "#",
    },
    {
        num: "02",
        title: "Performance Optimization",
        description: "Enhancing app speed with SSR, SSG, and ISR.",
        href: "#",
    },
    {
        num: "03",
        title: "Code Refactoring",
        description: "Enhancing code structure and readability.",
        href: "#",
    },
    {
        num: "04",
        title: "Deployment and CI/CD",
        description: "Automating app deployment using Vercel.",
        href: "#",
    },
    {
        num: "05",
        title: "SEO Optimization",
        description: " Improving search visibility with meta tags and Open Graph.",
        href: "#",
    },
    {
        num: "06",
        title: "UX/UI Design",
        description: "Creating intuitive, user-friendly interfaces that deliver an exceptional experience across all devices.",
        href: "#",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}
                                </div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
                                 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            <h2 className="text-2xl font-bold">{service.title}</h2>
                            <p className="text-lg">{service.description}</p>
                            <div className="border-b border-gray-500 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
