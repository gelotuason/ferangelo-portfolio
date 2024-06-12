import Link from 'next/link';
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

interface DownloadCVResumeProps {
    cv_url: string
}

export function LetsTalk() {
    return (
        <Link href='../contact' className="flex gap-[8px] mt-[32px] bg-blue-700 w-full lg:w-[140px] items-center justify-center p-[8px] rounded-2xl text-white shadow-lg hover:shadow-blue-700/50">
            <span>Let's Talk</span>
            <ChatBubbleLeftEllipsisIcon className="w-6" />
        </Link>
    )
}

export function DownloadCVResume({ cv_url }: DownloadCVResumeProps) {
    return (
        <Link href={cv_url} target='_blank' className="flex gap-[8px] mt-[32px] border border-blue-700 w-full lg:w-[180px] items-center justify-center p-[8px] rounded-2xl text-blue-700 shadow-lg hover:shadow-blue-700/50">
            <span>Download CV</span>
            <ArrowDownTrayIcon className="w-6" />
        </Link>
    )
} 