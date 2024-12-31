"use client";

import { useEffect, useState } from "react";
import FeatureBlog from "./FeatureBlog";
import { builder } from "@builder.io/sdk";

interface FeatureSectionProps {
    heading: string;
    subheading: string;
    viewAll: boolean;
    bgColor?: string;
    componentType: string;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function FeatureSection({
    heading,
    subheading,
    viewAll,
    bgColor,
    componentType,
}: FeatureSectionProps) {
    // @ts-expect-error This error is expected due to a type mismatch in external data
    const [caseStudies, setCaseStudies] = useState<any[]>([]);
    // @ts-expect-error This error is expected due to a type mismatch in external data
    const [insights, setInsights] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            if (componentType === "case-study") {
                const caseStudyData = await builder.getAll("case-studies", { prerender: false });
                setCaseStudies(caseStudyData);
            }
            if (componentType === "insights") {
                const insightsData = await builder.getAll("insights", { prerender: false });
                setInsights(insightsData);
            }
        }
        fetchData();
    }, [componentType]);

    return (
        <section
            className={`FeatureSection w-full flex flex-col justify-center items-center p-2`}
            style={{ backgroundColor: bgColor }}
        >
            <div className="w-full md:w-[80%] my-14 flex flex-col justify-center items-center">
                <h3 className="text-primary uppercase font-bold text-center">Blog</h3>

                <div className="w-full md:w-[50%]">
                    <h3 className="text-start text-4xl font-bold my-2">{heading}</h3>
                    <p className="text-start text-sm text-text-primary">{subheading}</p>
                </div>
            </div>

            {/* Category picker */}
            <section className="flex flex-col items-center justify-center w-full">
                <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 ml-5 md:ml-0">
                    {/* Render FeatureBlog dynamically */}
                    {caseStudies.map(
                        (item) =>
                            item.data && (
                                <FeatureBlog
                                    key={item.id}
                                    heading={item.data.heading}
                                    subheading={item.data.subheading}
                                    image={item.data.image}
                                    btnText={item.data.btntext}
                                    time={item.data.time}
                                    goto={item.data.goto}
                                />
                            )
                    )}

                    {insights.map(
                        (item) =>
                            item.data && (
                                <FeatureBlog
                                    key={item.id}
                                    heading={item.data.heading}
                                    subheading={item.data.subheading}
                                    image={item.data.image}
                                    btnText={item.data.btntext}
                                    time={item.data.time}
                                    goto={item.data.goto}
                                />
                            )
                    )}
                </div>

                <div className="my-14">
                    {viewAll && (
                        <button className="border border-primary font-bold text-primary px-5 py-2 rounded-lg my-5">
                            View all
                        </button>
                    )}
                </div>
            </section>
        </section>
    );
}
