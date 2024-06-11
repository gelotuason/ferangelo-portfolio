import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

interface DownloadCVResumeProps {
    cv_url: string
}

interface SocialLinksProps {
    linkedin_url: string,
    github_url: string
}

export function SocialLinks({ linkedin_url, github_url }: SocialLinksProps) {
    return (
        <div className='flex gap-[12px]'>
            <Link href={linkedin_url} target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>

            <Link href={github_url} target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faGithub} />
            </Link>
        </div>
    )
}

export function LetsTalk() {
    return (
        <Link href='../contact' className="flex gap-[8px] mt-[32px] bg-blue-700 w-full lg:w-[140px] items-center justify-center p-[16px] rounded-xl text-white shadow-lg hover:shadow-blue-700/50">
            <span>Let's Talk</span>
            <ChatBubbleLeftEllipsisIcon className="w-6" />
        </Link>
    )
}

export function DownloadCVResume({ cv_url }: DownloadCVResumeProps) {
    return (
        <Link href={cv_url} target='_blank' className="flex gap-[8px] mt-[32px] border border-blue-700 w-full lg:w-[180px] items-center justify-center p-[16px] rounded-xl text-blue-700 shadow-lg hover:shadow-blue-700/50">
            <span>Download CV</span>
            <ArrowDownTrayIcon className="w-6" />
        </Link>
    )
} 