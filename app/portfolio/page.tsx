'use client';

import RecentProjects from "../components/portfolio/recent-projects";
import { useEffect, useState } from "react";
import { getProjectsData } from "../utils/firebase";

export default function Portfolio() {

    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await getProjectsData();

                if (result) {
                    const parsedResult = JSON.parse(result);

                    setProjectsData(parsedResult);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <main className="max-w-[1280px] p-[32px] grid gap-10 mx-auto">
            <div className="flex flex-col gap-0">
                <p className="text-center text-gray-500 lg:text-lg">PROJECTS</p>
                <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">My Recent Projects</h1>
            </div>

            {
                projectsData.map((project: any, index: number) => (
                    <RecentProjects
                        key={index}
                        title={project.title}
                        description={project.description}
                        source_code_url={project.source_code_url}
                        live_url={project.live_url}
                        image_url={project.image_url}
                        tech_stack={project.tech_stack}
                    />
                ))
            }
        </main>
    )
}