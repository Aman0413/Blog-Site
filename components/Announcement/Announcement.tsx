'use client'

import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Announcement() {
    const [announcement, setAnnouncement] = useState("")

    useEffect(() => {
        async function fetchAnnouncement() {
            const { data } = await builder.get("announcement", { prerender: false });
            setAnnouncement(data.announcement);
        }
        fetchAnnouncement();
    }, []);

    if (!announcement) return null;
    return (
        <div className="bg-[#212433] p-3">

            <div className="text-white flex justify-center items-center space-x-3">
                <p>{announcement}</p>
                <MdArrowOutward className="text-primary text-xl" />
            </div>
        </div>
    )
}
