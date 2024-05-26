import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export function DownloadCVResume() {
    return (
        <a href='./Ferangelo Tuason Resume.pdf' download className="flex gap-[8px] mt-[32px] bg-blue-700 w-[180px] items-center justify-center p-[16px] rounded-xl text-white shadow-lg shadow-blue-700/50">
            <ArrowDownTrayIcon className="w-6" />
            <span>Download CV</span>
        </a>
    )
} 