import { EnvelopeIcon, PhoneIcon, ArrowTrendingUpIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 h-5/6">
            <section className="flex flex-col justify-evenly h-svh lg:h-full">
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
                        <span className="font-bold">gelotuason@gmail.com</span>
                    </div>
                </div>
                <div className="flex gap-[16px]">
                    <PhoneIcon className="w-6 text-[#fea82f]" />
                    <div>
                        <p className="text-gray-500">Phone</p>
                        <span className="font-bold">+63 936 702 7624</span>
                    </div>
                </div>
            </section>
            <section className="grid content-center h-svh lg:h-full">
                <div className="text-2xl font-semibold tracking-wide">Do you have any questions, feedback, or projects? I'd love to hear from you!</div>
                <form action="">
                    <div className="mt-8">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-gray-500">Subject</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                                    placeholder=""
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-500">Your Name</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                                    placeholder=""
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-500">Your Email</span>
                                <input
                                    type="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                                    placeholder=""
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-500">Message</span>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                                    rows={3}
                                >
                                </textarea>
                            </label>
                            <button className="flex gap-2 bg-blue-700 text-white px-[16px] py-[8px] w-[100px] rounded-lg items-center">
                                <span>Send</span>
                                <PaperAirplaneIcon className="w-6" />
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}