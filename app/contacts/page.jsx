"use client";

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram
} from "react-icons/fa";
import {motion} from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+38 (067) 715 75 91",
        link: "tel:+380677157591"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "serhii.kuznetsov05@gmail.com",
        link: "mailto:serhii.kuznetsov05@gmail.com"
    },
    {
        icon: <FaTelegram/>,
        title: "Telegram",
        description: "Serhii_Kuznetsov05",
        link: "https://t.me/Serhii_Kuznetsov05",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Ukraine, Cherkasy",
    },
];

const Contacts = () => {
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        };

        const validationErrors = {};


        if (!formData.firstName) validationErrors.firstName = "First name is required.";
        if (!formData.lastName) validationErrors.lastName = "Last name is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "A valid email address is required.";
        }
        if (!formData.phone || !/^\+?\d{1,3}[- ]?\(?\d{1,4}?\)?[- ]?\d{1,4}[- ]?\d{1,4}$/.test(formData.phone)) {
            validationErrors.phone = "A valid phone number is required.";
        }
        if (!formData.message) validationErrors.message = "Message is required.";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            e.target.submit();
        }
    };

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
            }}
            className="py-6 mr-7 ml-7"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            action="https://formspree.io/f/manqgydl"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Please fill out the form below to get in touch with me.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    required
                                    className={`${
                                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    required
                                    className={`${
                                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    required
                                    className={`${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    required
                                    className={`${
                                        errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                            </div>
                            <Textarea
                                name="message"
                                className={`h-[200px] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Type your message here."
                                required
                            />
                            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                            <Button type="submit" size="sm" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                className="text-xl hover:text-accent transition-colors underline"
                                            >
                                                {item.description}
                                            </a>
                                        ) : (
                                            <h3 className="text-xl">{item.description}</h3>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contacts;