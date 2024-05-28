import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

export function SocialLinks() {
    return (
        <div className='flex gap-[12px]'>
            <Link href="https://www.linkedin.com/in/ferangelo-tuason/" target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>

            <Link href="https://github.com/gelotuason" target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faGithub} />
            </Link>
        </div>
    )
}

export function LetsTalk() {
    return (
        <Link href='../contact' className="flex gap-[8px] mt-[32px] bg-blue-700 w-[140px] items-center justify-center p-[16px] rounded-xl text-white shadow-lg shadow-blue-700/50 animate-bounce">
            <span>Let's Talk</span>
            <ChatBubbleLeftEllipsisIcon className="w-6" />
        </Link>
    )
}