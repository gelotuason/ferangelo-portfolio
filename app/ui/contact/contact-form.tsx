'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { sendEmail } from "@/app/contact/actions";
import { useState } from "react";

export default function ContactForm() {

    interface UserInput {
        subject: string,
        senderName: string,
        senderEmail: string,
        message: string,
    }

    const initialState = {
        subject: '',
        senderName: '',
        senderEmail: '',
        message: '',
    }

    const [userInput, setUserInput] = useState<UserInput>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserInput((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (formData: FormData) => {
        await sendEmail(formData);
        setUserInput(initialState);
    };

    return (
        <form
            action={async (formData) => handleSubmit(formData)}
        >
            <div className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="text-gray-500">Subject</span>
                        <input
                            type="text"
                            name="subject"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                            onChange={handleChange}
                            value={userInput.subject}
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-500">Your Name</span>
                        <input
                            type="text"
                            name="senderName"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                            onChange={handleChange}
                            value={userInput.senderName}
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-500">Your Email <small>(Kindly put working email)</small></span>
                        <input
                            type="email"
                            name="senderEmail"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                            onChange={handleChange}
                            value={userInput.senderEmail}
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-500">Message</span>
                        <textarea
                            name="message"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-600 focus:ring-opacity-20 bg-[#f8f7f3]"
                            rows={3}
                            onChange={handleChange}
                            value={userInput.message}
                            required
                        >
                        </textarea>
                    </label>
                    <button type="submit" className="flex gap-2 bg-blue-700 text-white px-[16px] py-[8px] w-[100px] rounded-lg items-center shadow-lg hover:shadow-blue-700/50 active:">
                        <span>Send</span>
                        <PaperAirplaneIcon className="w-6" />
                    </button>
                </div>
            </div>
        </form>
    )
}
