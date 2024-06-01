import { EnvelopeIcon, PhoneIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import ContactForm from "../ui/contact/contact-form";

export default function Contact() {

    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 lg:h-5/6">
            <section className="flex flex-col lg:mx-auto justify-evenly h-svh lg:h-full tracking-widest">
                <h1 className="font-bold text-6xl">Got a project?</h1>
                <h2 className="flex text-5xl font-medium gap-4">
                    Let's get in touch
                    <ArrowTrendingUpIcon className="w-12" />
                </h2>
                <h3 className="font-semibold text-lg text-gray-500">Contact Information</h3>
                <div className="flex gap-[16px]">
                    <EnvelopeIcon className="w-6 text-[#fea82f]" />
                    <div>
                        <p className="text-gray-500">Email</p>
                        <span className="font-semibold">gelotuason@gmail.com</span>
                    </div>
                </div>
                <div className="flex gap-[16px]">
                    <PhoneIcon className="w-6 text-[#fea82f]" />
                    <div>
                        <p className="text-gray-500">Phone</p>
                        <span className="font-semibold">+63 936 702 7624</span>
                    </div>
                </div>
            </section>
            <section className="grid content-center h-svh lg:h-full">
                <div className="text-2xl font-semibold tracking-wide">Do you have any questions, feedbacks, or projects? I'd love to hear from you!</div>
                <ContactForm />
            </section>
        </main>
    )
}