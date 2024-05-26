import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function LetsTalk() {
    return (
        <Link href='../contact' className="flex gap-[8px] mt-[32px] bg-blue-700 w-[140px] items-center justify-center p-[16px] rounded-xl text-white shadow-lg shadow-blue-700/50 animate-bounce">
            <span>Let's Talk</span>
            <ChatBubbleLeftEllipsisIcon className="w-6" />
        </Link>
    )
}