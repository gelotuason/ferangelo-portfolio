'use client';

import { DesktopNavLinks, MobileNavLinks } from "./nav-links"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { SocialLinks } from "@/app/components/header/social-links";
import { getData } from "@/app/utils/firebase";

export function Header() {

    interface SocialLinks {
        linkedin_url: string,
        github_url: string,
    }

    const initialState = {
        linkedin_url: '',
        github_url: '',
    }

    const [socialLinks, setSocialLinks] = useState<SocialLinks>(initialState);

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const fetchSocialLinks = async () => {
            const result = await getData();

            if (result) {
                const parsedResult = JSON.parse(result);

                setSocialLinks({
                    linkedin_url: parsedResult.linkedin_url,
                    github_url: parsedResult.github_url,
                })
            } else {
                console.log('Please refresh the page.');
            }
        }

        fetchSocialLinks();
    })

    return (
        <header className="container absolute top-0 justify-between flex flex-wrap items-center gap-[16px] px-[24px] py-[8px] border-b-2 border-[#f2f0eb]">
            <div className="flex items-center gap-[24px]">
                <Link href={'/'}>
                    <h1 className="font-bold text-5xl">Gelo<span className="text-[#fea82f]">.</span></h1>
                </Link>
                <SocialLinks
                    linkedin_url={socialLinks.linkedin_url}
                    github_url={socialLinks.github_url}
                />
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