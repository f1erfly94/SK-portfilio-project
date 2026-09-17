import Link from "next/link";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import {profile} from "@/lib/site";

const socials = [
    {icon: <FaGithub/>, label: "GitHub", path: profile.github},
    {icon: <FaTelegram/>, label: "Telegram", path: profile.telegram},
    {icon: <FaLinkedin/>, label: "LinkedIn", path: profile.linkedin},
];

/**
 * Icon-only links, so each one carries its own label — without it a screen reader
 * announces three links called "link".
 */
const Socials = ({containerStyles, iconStyles}) => (
    <div className={containerStyles}>
        {socials.map((item) => (
            <Link
                key={item.label}
                href={item.path}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className={iconStyles}
            >
                <span aria-hidden="true">{item.icon}</span>
            </Link>
        ))}
    </div>
);

export default Socials;
