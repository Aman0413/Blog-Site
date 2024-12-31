
'use client';

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


type FaqItemProps = {
    question: string;
    answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleVisibility = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="cursor-pointer flex border rounded-lg border-gray-200 w-full shadow-md justify-between items-center p-4">
            <div className="flex flex-col w-full justify-center items-start space-y-2"
            >
                <p className="font-bold">{question}</p>
                {isOpen && <p className="text-text-primary">{answer}</p>}
            </div>
            <button
                className={`cursor-pointer font-bold px-2 py-2 rounded-lg my-5 ${isOpen ? 'text-white bg-primary' : 'text-primary bg-gray-300'}`}
                onClick={toggleVisibility}
            >
                {isOpen ? <FaMinus /> : <FaPlus />}
            </button>
        </div>
    )
}
