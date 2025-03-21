'use client'
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {

    const handleDownloadCV = () => {
        const fileName = 'Kuznetsov_Serhii_CV.pdf';
        const cvPath = '/assets/download/Kuznetsov_Serhii_CV.pdf';


        const link = document.createElement('a');
        link.href = cvPath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                                onClick={handleDownloadCV}
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl"/>
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6"
                                    iconStyles="w-10 h-10 text-2xl border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
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
