"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/Group.png";
import { FiMoon } from "react-icons/fi";
import Link from "next/link";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Header() {
    //@ts-ignore
    const [navlinks, setNavlinks] = useState<any[]>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        async function fetchNavLinks() {
            const data = await builder.getAll("nav-link", { prerender: false });
            setNavlinks(data);

        }

        fetchNavLinks();
    }, []);

    return (
        <nav className="p-4 flex justify-between items-center text-text-primary w-full border-b-2 border-gray-200">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <Image src={logo} alt="logo" width={100} height={50} />
            </div>

            {/* Nav Links */}
            <div
                className={`fixed top-0 left-0 z-40 h-full w-full bg-white transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full flex justify-center items-center"
                    } md:static md:translate-x-0 md:flex md:items-center md:space-x-6`}
            >
                <ul className="flex flex-col items-start space-y-4 px-4 pt-10 md:flex-row md:space-y-0 md:space-x-4 md:pt-0">
                    {navlinks &&
                        navlinks.map(
                            (item) =>
                                item.data && (
                                    <li key={item.id} className="text-sm">
                                        <Link href={`${item.data.url}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {item.data.navlink}
                                        </Link>
                                    </li>
                                )
                        )}
                </ul>
                {/* Mobile Buttons */}
                <div className="flex flex-col items-start space-y-4 px-4 pt-6 md:hidden">
                    <button className="border-2 w-full border-primary px-4 py-2 rounded-lg text-primary font-bold">
                        Login
                    </button>
                    <button className="bg-primary w-full px-4 py-2 rounded-lg text-white font-bold">
                        Register Now
                    </button>
                </div>
            </div>

            {/* Action Buttons for Desktop */}
            <div className="hidden md:flex items-center justify-end space-x-4 w-full">
                <button className="border-2 w-[30%] border-primary px-4 py-2 rounded-lg text-primary font-bold">
                    Login
                </button>
                <button className="bg-primary w-[30%] px-2 py-2 rounded-lg text-white font-bold">
                    Register Now
                </button>
                <button className="border-2 border-gray-600 px-4 py-2 rounded-lg text-font-bold">
                    <FiMoon />
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="block md:hidden px-4 py-2 text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
        </nav>
    );
}
