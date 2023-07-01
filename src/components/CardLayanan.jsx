import React from "react"

import Btn from "./Btn"

export default function CardLayanan(props){
    return (
        <a href={props.href} className="flex flex-col max-md:min-w-[100%] md:max-lg:min-w-[70%] lg:min-w-[50%] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row" >
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={props.Media}
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {props.Judul}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {props.Deskripsi}...
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                Last updated 3 mins ago
                </p>
            </div>
        </a>
    )
}