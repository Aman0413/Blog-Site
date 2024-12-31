import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { caseStudyType } from "@/types/types";




export default function FeatureBlog({ image, heading, subheading, goto, btnText, time }: caseStudyType) {
    const imageUrl = typeof image === "string" ? image : URL.createObjectURL(image);
    return (
        <div className="cursor-pointer p-4  flex flex-col space-y-4 rounded-lg ">

            <div className="lg:w-full">
                <Image className="rounded-lg lg:w-full" src={imageUrl} alt="blog1" width={300} height={200} />
            </div>

            <div className="flex space-x-5  items-center text-sm">
                <button className="bg-primary text-white px-3 py-1  ">
                    {btnText}
                </button>
                <p>{time}</p>
            </div>
            <div className="flex flex-col text-sm space-y-5">
                <span className="font-bold ">{heading}</span>
                <p className="text-text-primary text-sm font-thin">{subheading}</p>
                <div className="text-sm text-primary flex items-center space-x-2">
                    <span className="underline">{goto}</span>
                    <MdOutlineArrowOutward />
                </div>
            </div>

        </div>
    )
}
