'use client';

import React from 'react'
import { useFormStatus } from 'react-dom';
import { GrSend } from "react-icons/gr";

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className='group flex items-center w-fit justify-start px-4 py-2 rounded-xl text-white
         bg-gray-700 group-hover:bg-gray-950 focus:scale-110 hover:scale-110 underline-none transition
         dark:bg-gray-50 dark:text-black/80
         '>
            {pending ? <div role='status' className='rounded-full animate-spin w-5 h-5 border-white border-b-2 dark:bg-white/80 dark:border-black'></div> : <>
                Send {"  "}
                <GrSend className="text-normal ml-[.4rem] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>}
        </button>
    )
}
