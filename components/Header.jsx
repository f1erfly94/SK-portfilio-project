'use client'; // Додано директиву для використання на стороні клієнта
import React from 'react';
import Link from 'next/link';
import Nav from "@/components/Nav";
import {Button} from "@/components/ui/button";
import MobileNav from "@/components/MobileNav"; // Додано імпорт Link з Next.js

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center"> {/* Виправлено помилку: "conteiner" -> "container" */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Serhii Kuznetsov
                        <span className="text-accent">.</span> {/* Виправлено зайвий пробіл */}
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8 ">
                    <Nav/>
                    <Link href="/contact">
                        <Button variant="outline"> Hire me</Button>
                    </Link>
                </div>
                <div className="xl:hidden"></div>
                <MobileNav/>
            </div>
        </header>
    );
};

export default Header;