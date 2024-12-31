'use client';
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import BlogList from "./BlogList";
import { BlogType } from "@/types/types";

interface BlogSectionProps {
    heading: string;
    subheading: string;
    blogs: BlogType[];
}

export default function BlogSectionContent({ heading, subheading, blogs }: BlogSectionProps) {

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6; // Number of blogs per page


    // Effect to filter blogs based on the search query
    useEffect(() => {
        const filtered = blogs.filter((item) =>
            item.data &&
            (item.data.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.data.subheading.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredBlogs(filtered);
        setCurrentPage(1); // Reset to the first page when search changes
    }, [searchQuery, blogs]);



    // Calculate current blogs to display
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Calculate total pages
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    // Pagination handlers
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-4">
            <main className="my-14">
                <div>
                    <p className="text-primary font-bold text-center uppercase">Blog</p>
                </div>
                <div className="flex flex-col space-y-2 justify-center mt-2">
                    <h2 className="text-5xl font-bold">{heading}</h2>
                    <p>{subheading}</p>
                </div>
            </main>

            {/* Category Picker and Search Bar */}
            <section className="w-full flex justify-center items-center p-2">
                <div className="w-full md:w-[80%] flex justify-between items-center mt-10 p-2">
                    <div className="flex space-x-4 text-text-primary text-sm">
                        <span>View All</span>
                        <span className="text-primary">Healthcare trends</span>
                        <span>AI Insights</span>
                        <span>Case Studies</span>
                        <span>Best Practices</span>
                    </div>
                    <div>
                        <input
                            className="border px-2 py-1 rounded-md"
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>
            {/* Blog List */}
            <BlogList blogs={currentBlogs} searchQuery={searchQuery} />

            {/* Pagination */}
            {filteredBlogs.length > blogsPerPage && (
                <div className="flex justify-center items-center mt-10 text-sm space-x-2 text-text-primary">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`p-2 rounded ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"}`}
                    >
                        <MdKeyboardDoubleArrowLeft />
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageClick(index + 1)}
                            className={`px-2 py-1 rounded-full ${currentPage === index + 1 ? "bg-primary text-white" : "hover:bg-gray-200"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded ${currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"}`}
                    >
                        <MdKeyboardDoubleArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
}
