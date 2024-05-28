'use client';

import { DesktopNavLinks, MobileNavLinks } from "./nav-links"
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='container flex flex-wrap items-center gap-[16px] px-[24px] py-[8px] mt-[16px] border-b-2 border-[#f2f0eb] justify-between'>
            <Link href={'/'}>
                <h1 className="font-bold text-5xl">Gelo<span className="text-[#fea82f]">.</span></h1>
            </Link>

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