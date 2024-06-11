'use client'

import { getData } from "@/app/utils/firebase";
import TechstackLogos from "@/app/techstack";
import { DownloadCVResume } from "@/app/links";
import { LetsTalk } from "@/app/links";
import { useEffect, useState } from "react";

export default function About() {

    interface Data {
        name: string,
        title: string,
        description: string
    }

    const initialState = {
        name: '',
        title: '',
        description: ''
    }

    const [data, setData] = useState<Data>(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();

            if (result) {
                const parsedResult = JSON.parse(result);
                setData({ name: parsedResult.name, title: parsedResult.title, description: parsedResult.description });
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">{data.name}</h1>
            <div className="flex items-center gap-[16px] lg:gap-[32px]">
                <hr className="w-[32px] lg:w-[86px] border border-black" />
                <p className="text-lg md:text-2xl lg:text-3xl font-light">{data.title} 🧑‍💻</p>
            </div>
            <p className="text-gray-500 break-normal">{data.description}</p>
            <div className="flex justify-between items-center h-24">
                <p className="font-semibold">Tech Stacks</p>
                <hr className="w-6 rotate-90 border-black" />
                <TechstackLogos />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-[16px]">
                <DownloadCVResume />
                <LetsTalk />
            </div>
        </>
    )
}