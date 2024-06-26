'use client'

import { getData } from "@/app/utils/firebase";
import TechstackLogos from "@/app/techstack";
import { DownloadCVResume, LetsTalk } from "./links";
import { useEffect, useState } from "react";
import Image from "next/image";

export function About() {

    interface Data {
        name: string,
        title: string,
        description: string,
        cv_url: string,
        my_photo_url: string
    }

    const initialState = {
        name: '',
        title: '',
        description: '',
        cv_url: '',
        my_photo_url: ''
    }

    const [data, setData] = useState<Data>(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();

                if (result) {
                    const parsedResult = JSON.parse(result);

                    setData({
                        name: parsedResult.name,
                        title: parsedResult.title,
                        description: parsedResult.description,
                        cv_url: parsedResult.cv_url,
                        my_photo_url: parsedResult.my_photo_url
                    });
                }

                setLoading(false);
            } catch (error) {
                setLoading(true);
                alert(`Something didn't work properly, please refresh the page.`);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (<h1 className="mt-24">Loading...</h1>)
    } else {
        return (
            <>
                <section className="grid gap-[16px] content-center justify-center">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">{data.name}</h1>
                    <div className="flex items-center gap-[16px] lg:gap-[32px]">
                        <hr className="w-[16px] md:w-[32px] lg:w-[86px] border border-black" />
                        <p className="md:text-2xl lg:text-3xl font-light">{data.title} 🧑‍💻</p>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base break-normal">{data.description}</p>
                    <div className="flex justify-between items-center h-24">
                        <p className="font-semibold">Tech Stacks</p>
                        <hr className="w-6 rotate-90 border-black" />
                        <TechstackLogos />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-[16px]">
                        <DownloadCVResume cv_url={data.cv_url} />
                        <LetsTalk />
                    </div>
                </section>
                <Image
                    src={data.my_photo_url}
                    width={500}
                    height={500}
                    className='animate-border-radius border-4 border-double border-black my-auto mx-auto hidden md:block'
                    alt='My Photo'
                    priority
                />
            </>
        )
    }
}