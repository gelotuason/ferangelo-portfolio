import Image from "next/image";
import EMD from '@/public/emp-management-dashboard.png';
import SMA from '@/public/social-media-app.png';
import { Links } from "../ui/portfolio/links";

export default function Portfolio() {
    return (
        <main className="max-w-[1160px] p-[32px] grid gap-10 mx-auto">
            <div className="flex flex-col gap-0">
                <p className="text-center text-gray-500 lg:text-lg">PROJECTS</p>
                <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">My Recent Work</h1>
            </div>

            <figure className="flex lg:flex-row flex-col">
                <h1 className="my-auto text-6xl text-outline font-mono text-center lg:text-start">02</h1>
                <Image
                    src={SMA}
                    width={500}
                    height={500}
                    alt="EMD Project Mockup"
                    className="my-auto mx-auto"
                />
                <figcaption className="flex flex-col justify-evenly p-[16px] items-center text-center gap-[32px] lg:gap-0">
                    <h1 className="font-bold text-lg">Social Media App</h1>
                    <p className="text-gray-500">
                        A user-friendly social media web application designed to connect people, share experiences, and foster community engagement.
                        With a sleek design, it enables users to effortlessly post updates, and discover new content.
                    </p>
                    <div className="font-semibold w-full flex justify-evenly">
                        <p>React</p> |
                        <p>Material UI</p> |
                        <p>Firebase</p> |
                        <p>Yup</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:flex-row justify-center">
                        <Links href="https://github.com/gelotuason/Social_Media_App">Source Code</Links>
                        <Links href="https://social-media-app-eta-snowy.vercel.app/">Live URL</Links>
                    </div>
                </figcaption>
            </figure>
            <figure className="flex lg:flex-row flex-col">
                <h1 className="my-auto text-6xl text-outline font-mono text-center lg:text-start">01</h1>
                <Image
                    src={EMD}
                    width={500}
                    height={500}
                    alt="EMD Project Mockup"
                    className="my-auto mx-auto"
                />
                <figcaption className="flex flex-col justify-evenly p-[16px] items-center text-center gap-[32px] lg:gap-0">
                    <h1 className="font-bold text-lg">Employee Management Dashboard</h1>
                    <p className="text-gray-500">A web application with a focus on simplicity, making it easy for user to manage and monitor employees.</p>
                    <div className="font-semibold w-full flex justify-evenly">
                        <p>React</p> |
                        <p>Tailwind CSS</p> |
                        <p>Firebase</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:flex-row justify-center">
                        <Links href="https://github.com/gelotuason/Project4_Employee_Management_Dashboard">Source Code</Links>
                        <Links href="https://project4-employee-management-dashboard-coral.vercel.app/">Live URL</Links>
                    </div>
                </figcaption>
            </figure>
        </main>
    )
}