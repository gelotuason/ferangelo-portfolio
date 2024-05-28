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

export function DesktopNavLinks({ className }: { className: string }) {
    const pathname = usePathname();
    return (
        <nav className='flex gap-[40px]'>
            {
                links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'text-lg underline-offset-8 decoration-2 hover:underline',
                                className,
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
        </nav>
    )
}

export function MobileNavLinks() {
    const pathname = usePathname();
    return (
        <nav className='flex flex-col basis-full items-center gap-[8px]'>
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
        </nav>
    )
}
