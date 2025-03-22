import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

const socials = [
    { icon: <FaGithub />, label: 'GitHub', path: 'https://github.com/f1erfly94' },
    { icon: <FaTelegram />, label: 'Telegram', path: 'https://t.me/Serhii_Kuznetsov05' },
    { icon: <FaLinkedin />, label: 'Linkedin', path: 'https://www.linkedin.com/in/serhii-kusnetsov-032823343/' },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
