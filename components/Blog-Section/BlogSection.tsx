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
    // @ts-expect-error This error is expected due to a type mismatch in external data
    const [blogData, setBlogData] = useState<any[]>([]);

    useEffect(() => {
        async function fetchBlogs() {
            const data = await builder.getAll("blog", { prerender: false });
            setBlogData(data);
        }
        fetchBlogs();
    }, []);

    return (
        <BlogSectionContent heading={heading} subheading={subheading} blogs={blogData} />
    );
}
