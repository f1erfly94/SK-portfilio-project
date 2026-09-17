"use client";

import CountUp from "react-countup";
import Reveal from "@/components/Reveal";

const stats = [
    {num: 4, text: "Years of experience"},
    {num: 17, text: "Projects completed"},
    {num: 20, text: "Technologies in the stack"},
    {num: 1070, text: "Code commits this year"},
];

const Stats = () => (
    <section className="container mx-auto">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line xl:grid-cols-4">
            {stats.map((item, index) => (
                <Reveal key={item.text} delay={index * 0.03} className="bg-primary/80 p-6 xl:p-8">
                    <CountUp
                        end={item.num}
                        duration={2.2}
                        delay={index * 0.15}
                        enableScrollSpy
                        scrollSpyOnce
                        className="font-display text-4xl font-semibold text-white xl:text-5xl"
                    />
                    <p className="label mt-3 leading-relaxed">{item.text}</p>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Stats;
