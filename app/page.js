import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {

    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Frontend Developer</span>
                        <h1 className="h1">
                            Hi, I&apos;m <br/> <span>Serhii Kuznetsov</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80 mt-4">
                            I am a passionate Frontend Developer dedicated to building user-friendly web interfaces.
                            Let&apos;s create something amazing together!
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            {/*<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">*/}
                            {/*    <span>Download CV</span>*/}
                            {/*    <FiDownload className="text-xl"/>*/}
                            {/*</Button>*/}
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-8">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}
