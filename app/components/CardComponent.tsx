import React from "react";
import Image from "next/image"

interface CardProps {
    title: string,
    description: string,
    languages: Array<String>,
    img_href: string
}

export function CardComponent({ title, description, languages, img_href  }: CardProps) {
    return (
        <div className="w-96 h-full hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex flex-col justify-center bg-slate-900 pb-5 my-5 flex-1 gap-3 mr-2 drop-shadow-lg">
                <Image
                    src={img_href}
                    width={500}
                    height={10}
                    className="opacity-50 h-80"
                    alt="Picture of the author"
                />
                <div className="m-5">
                    <p className="text-slate-100 font-bold text-2xl text-left mb-2">{title}</p>
                    <p className="text-slate-500 text-md mb-5">
                        {languages.join(" • ")}
                    </p>
                    <p className="text-slate-100 mb-5">{description}</p>
                    <button className="p-3 text-slate-100 bg-inherit border-2 border-slate-100 hover:border-purple-500 hover:bg-purple-500 font-bold hover:cursor-pointer transition duration-300">TRY IT OUT</button>
                </div>
            </div>
        </div>
    );
}