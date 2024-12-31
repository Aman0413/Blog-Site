import { BlogType } from "@/types/types";
import Blog from "./Blog";


interface BlogListProps {
    blogs: BlogType[];
    searchQuery: string;
}



export default function BlogList({ blogs, searchQuery }: BlogListProps) {



    return (
        <section className="flex flex-col items-center justify-center w-full">
            <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {blogs && blogs.length > 0 ? (
                    blogs.map((item, index) => (
                        item.data && (
                            <Blog
                                key={index}
                                image={item.data.image}
                                heading={item.data.heading}
                                subheading={item.data.subheading}
                                authorImg={item.data.authorimg}
                                authorName={item.data.authorname}
                                time={item.data.time}
                                slug={item.data.slug}
                            />
                        )
                    ))
                ) : (
                    <p className="text-center text-gray-500">No blogs found for &quot;{searchQuery}&quot;.</p>
                )}
            </div>
        </section>
    )
}
