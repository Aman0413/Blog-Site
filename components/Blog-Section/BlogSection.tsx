"use client";

import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import BlogSectionContent from "./BlogSectionContent";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogSectionProps {
    heading: string;
    subheading: string;
}

export default function BlogSection({ heading, subheading }: BlogSectionProps) {

    // @ts-ignore: Bypassing type error temporarily
    const [blogData, setBlogData] = useState<any[]>([]);

    useEffect(() => {
        async function fetchBlogs() {
            const data = await builder.getAll("blog", { prerender: false });
            setBlogData(data);
            console.log("Data", data);
        }
        fetchBlogs();
    }, []);

    return (
        <BlogSectionContent heading={heading} subheading={subheading} blogs={blogData} />
    );
}
