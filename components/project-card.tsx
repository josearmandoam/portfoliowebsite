"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Card } from '@/types/types';


export default function ProjectCard({card} : { card: Card}) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"]
    });
  

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const pacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div ref={ref} className={`${card?.position ? 'flex-row': 'flex-row-reverse' } group border rounded-lg 
    bg-gray-100 w-min(100%,35rem) sm:w-[35rem] flex items-center hover:bg-gray-200 mb-6 relative overflow-hidden
    dark:bg-gray-800 dark:hover:bg-gray-200/20 transition  dark:border-gray-700/80
    `}
    style={{
        scale: scaleProgress,
        opacity: pacityProgress
    }}
    >
        <div className='p-8 h-full flex flex-col '>
            <h3 className='text-2xl font-semibold dark:text-white group-hover:scale-110 group-hover:translate-x-2 transition'>{card?.title}</h3>
            <p className='py-4'>{card?.description}</p>
            <ul className='flex items-center justify-start mt-auto h-full flex-wrap gap-2'>
                { (card?.skills.length > 0 ) ?
                <>
                {
                    card.skills.map((skill, index)=>(
                        <li key={index} className='border-2 border-white py-1 px-4 rounded-full bg-black/[0.7] text-white text-[0.7rem] dark:border-gray-50/20 dark:bg-gray-50 dark:text-black'>{skill}</li>
                    ))
                }
                </>
                :
                <></>
                }
            </ul>
        </div>
        <Image 
        src={card?.imagePath} alt={card?.alt} quality={95} width={500} height={500}
        className={`${card?.position
        ?'group-hover:-rotate-6 group-hover:translate-x-8 group-hover:scale-[1.34]'
        :'group-hover:rotate-6 group-hover:-translate-x-8 group-hover:scale-[1.34]'} 
        aboslute top-8  -right-40 w-[10.25rem] max-h-[20rem] sm:w-[28.25rem] shadow-md object-cover transition hidden sm:block`}/>
    </motion.div>
  )
}
