import NavLinks from "./nav-links"
import Link from "next/link";

export default function Header() {
    return (
        <header className='container flex items-center gap-[16px] p-[8px] mt-[16px] border-b-2 border-[#f2f0eb]'>
            <Link href={'/'}>
                <h1 className="font-bold text-5xl">Gelo<span className="text-[#fea82f]">.</span></h1>
            </Link>
            <nav className="flex gap-[40px] ms-auto">
                <NavLinks />
            </nav>
        </header>
    )
}