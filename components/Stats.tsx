import CountUpNumber from "@/components/CountUpNumber";
import Reveal from "@/components/Reveal";
import {caseStudies} from "@/data/case-studies";
import {projects} from "@/data/projects";
import {profile} from "@/lib/site";

/**
 * Every number here is counted from the data the rest of the site shows, so the
 * row cannot claim 17 projects next to a work page that lists 10. That is also
 * why there is no commit count: it would be a figure typed in by hand and left
 * to go stale.
 */
const stats = [
    {num: profile.yearsOfExperience, text: "Years of experience"},
    {num: projects.length, text: "Projects on this site"},
    {num: Object.keys(caseStudies).length, text: "Written-up case studies"},
    {num: new Set(projects.flatMap((project) => project.stack)).size, text: "Technologies across them"},
];

const Stats = () => (
    <section className="container mx-auto">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line xl:grid-cols-4">
            {stats.map((item, index) => (
                <Reveal key={item.text} delay={index * 0.03} className="bg-primary/80 p-6 xl:p-8">
                    <CountUpNumber
                        end={item.num}
                        delay={index * 0.15}
                        className="font-display text-4xl font-semibold text-white xl:text-5xl"
                    />
                    <p className="label mt-3 leading-relaxed">{item.text}</p>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Stats;
