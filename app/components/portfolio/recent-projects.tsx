import Image from "next/image";
import { Links } from "./links";

interface RecentProjectsProps {
    title: string,
    description: string,
    source_code_url: string,
    live_url: string,
    image_url: string,
    image_alt: string,
    tech_stack: []
}

export default function RecentProjects({ title, description, source_code_url, live_url, image_url, image_alt, tech_stack }: RecentProjectsProps) {

    return (
        <figure className="flex lg:flex-row flex-col">
            <Image
                src={image_url}
                width={500}
                height={500}
                alt={image_alt}
                className="my-auto mx-auto"
            />
            <figcaption className="flex flex-col justify-evenly p-[16px] items-center text-center gap-[32px] lg:gap-0">
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="text-gray-500">
                    {description}
                </p>
                <div className="font-semibold w-full flex flex-wrap justify-evenly">
                    {
                        tech_stack.map((tech: any, index: any) => (
                            <p key={index}>{tech}</p>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 w-full lg:flex-row justify-center">
                    <Links href={source_code_url}>Source Code</Links>
                    <Links href={live_url}>Live URL</Links>
                </div>
            </figcaption>
        </figure>
    )
}