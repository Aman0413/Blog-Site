'use client'
import Image from "next/image";
import { blogType } from "@/types/types";
import { useRouter } from "next/navigation";

export default function Blog({ image, heading, subheading, authorImg, authorName, time, slug }: blogType) {


    const router = useRouter()
    return (
        <div className="cursor-pointer p-4  flex flex-col space-y-4 rounded-lg "

            onClick={() => {
                router.push(`/blog/${slug}`)
            }}
        >
            <div className="lg:w-full">
                <Image className="rounded-lg lg:w-full" src={image} alt="blog1" width={300} height={200} />
            </div>

            <span className="font-bold ">{heading}</span>
            <p className="text-text-primary text-sm font-thin">{subheading}</p>

            <div className="flex  items-center space-x-4 text-sm text-text-primary">
                <div className="flex space-x-1 items-center">
                    <Image src={authorImg} alt="avatar" width={25} height={25} loading="lazy" />
                    <span>{authorName}</span>
                </div>

                <div className="flex space-x-2 items-center ">
                    <button className="bg-primary text-white px-3 py-1 rounded-full ">
                        Insights
                    </button>
                    <p>{time}</p>
                </div>

            </div>

        </div>
    )
}
