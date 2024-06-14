'use client'

import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className={clsx("p-4 border-t-2 border-[#f2f0eb] flex", {
            'lg:absolute lg:bottom-0 mt-20': pathname == '/' || pathname == '/contact'
        })}>© 2024 Ferangelo Tuason. All rights reserved.</footer >
    )
}