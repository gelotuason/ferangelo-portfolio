import Link from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

export function Links({ href, children }: LinkProps) {
    return (
        <Link
            href={href}
            className="px-[16px] py-[8px] rounded-xl bg-blue-700 text-white shadow-lg hover:shadow-blue-700/50"
        >
            {children}
        </Link>
    )
} 