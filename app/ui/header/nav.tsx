'use client';

import { DesktopNavLinks, MobileNavLinks } from "./nav-links"
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { SocialLinks } from "@/app/links";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='container flex flex-wrap items-center gap-[16px] px-[24px] py-[8px] relative top-2 border-b-2 border-[#f2f0eb] justify-between'>
            <div className="flex items-center gap-[24px]">
                <Link href={'/'}>
                    <h1 className="font-bold text-5xl">Gelo<span className="text-[#fea82f]">.</span></h1>
                </Link>
                <SocialLinks />
            </div>

            {/* Desktop Nav */}
            <DesktopNavLinks className="hidden md:block" />
            {/* End of Desktop Nav */}

            {/* Mobile Nav */}
            <button onClick={toggleNavBar} className="md:hidden">
                <Bars3Icon className="w-10" />
            </button>
            {
                isOpen ? <MobileNavLinks /> : null
            }
            {/* End of Mobile Nav */}
        </header>
    )
}