'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/', },
    { name: 'About', href: '/about', },
    { name: 'Projects', href: '/portfolio', },
    { name: 'Contact', href: '/contact', },
];

export default function NavLinks() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            {
                links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'text-lg underline-offset-8 decoration-2 hover:underline',
                                {
                                    'text-[#fea82f]': pathname === link.href
                                },
                            )}
                        >
                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}
