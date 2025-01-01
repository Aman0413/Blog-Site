"use client";

import { useEffect, useState } from "react";
import FaqItem from "./FaqItem";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function FaqSection() {

    const [faqs, setFaqs] = useState<any[]>([]);

    useEffect(() => {
        async function fetchFaqs() {
            const data = await builder.getAll("faq", { prerender: false });
            setFaqs(data);
        }
        fetchFaqs();
    }, []);

    return (
        <section className="faq-section w-full flex flex-col justify-center items-center p-2">
            <div className="w-full md:w-[80%] my-14 flex flex-col justify-center items-center">
                <h3 className="text-primary uppercase font-bold text-center">Faq</h3>

                <div className="w-full md:w-[60%]">
                    <h3 className="text-start text-4xl font-bold my-3">Frequently asked questions</h3>
                    <p className="text-start text-sm text-text-primary">
                        Explore to learn more about how Symbiofy can empower your business with AI-driven solutions.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-[80%] flex flex-col justify-center items-center space-y-6">
                {faqs &&
                    faqs.map(
                        (item) =>
                            item.data && (
                                <FaqItem
                                    key={item.id}
                                    question={item.data.question}
                                    answer={item.data.answer}
                                />
                            )
                    )}
            </div>

            <div className="w-full md:w-[80%] my-20 flex flex-col justify-center items-center space-y-6">
                <p className="text-center">
                    Delightfully effective experience... delivered a principal software engineer to offer within a month. It’s
                    remarkably helpful to access a sophisticated curation of candidates across tough-to-fill roles from the first
                    week!
                </p>
                <p>Sr. recruiter @Google Inc.</p>
            </div>
        </section>
    );
}
