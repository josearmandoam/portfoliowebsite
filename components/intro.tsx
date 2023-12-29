'use client';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { getActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.2);

  return (
    <section ref={ref} className='scroll-mt-[150rem] mb-16' id="home">
      <div className='flex items-center justify-center'>
        <div className='relative'
        >
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "tween",
                duration: 0.5 }}
            >
                <Image src='https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt='Alex portrait' 
                width={200} 
                height={200} 
                quality={95}
                className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'/>
                <motion.span className='absolute text-4xl -bottom-6 right-6'
                    initial = {{ opacity: 0, scale: 0 }}
                    animate = {{ opacity: 1, scale: 1 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                }}
                >
                    🙌
                </motion.span>    
            </motion.div>
        </div>
      </div>

    <motion.p className='text-gray-950 text-lg pt-20 max-w-[50rem] text-center relative dark:text-white/70'
    initial= {{opacity: 0, y: 100}}
    animate= {{opacity: 1, y: 0}}
    transition={{ type: "tween",
                duration: 0.5 }}
    >
        <strong>Hello, I'm Alex</strong>. I'm <strong>full stack developer</strong> with <strong>5 years</strong> of experience. I enjoy building sites & apps. My focus is <Link className='underline' href="https://nextjs.org/">React (Next.js)</Link>
    </motion.p>
    <motion.div className='relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-lg font-medium'
     initial= {{opacity: 0, y: 100}}
     animate= {{opacity: 1, y: 0}}
     transition={{ type: "tween",
                 duration: 0.5 }}
    >
        <Link className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-2 
        rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" 
        href='#contact'>Contact me <BsArrowRight className="group-hover:translate-x-2"/></Link>
        <a href='/CV.pdf' target='_blank' download
        className='group flex items-center gap-2 bg-white text-gray-750 px-6 py-2 
        rounded-full border border-black/10 focus:scale-110 hover:scale-110 hover:bg-gray-750 active:scale-105 transition
        dark:text-gray-50 dark:bg-gray-700
        '>
            Download CV <HiDownload className="group-hover:translate-y-1"/></a>
        <a href='https://www.linkedin.com/' target='_blank' 
        className='bg-white text-gray-750 px-4 py-2 rounded-full border border-black/10 focus:scale-110 
        hover:scale-110 hover:bg-gray-750 active:scale-105 transition
        dark:text-gray-50 dark:bg-gray-700'><BsLinkedin/></a>
        <a href='https://github.com/' target='_blank' 
        className='bg-white text-gray-750 px-4 py-2 rounded-full border border-black/10 focus:scale-110 
        hover:scale-110 hover:bg-gray-750 active:scale-105 transition
        dark:text-gray-50 dark:bg-gray-700'><BsGithub/></a>
    </motion.div>
      
    </section>
  )
}
