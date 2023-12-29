"use client";
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import type { sectionType } from '@/types/types';
import { CurrentSectionContext, getActiveSectionContext } from '@/context/active-section-context';


export default function Header() {
    const { currentSection, setCurrentSection, setTimeOfLastClick } = getActiveSectionContext();

    return <header className="z-[999] relative">
        <motion.div className='fixed top-0 left-1/2 h-[5.5rem] rounded-none border 
        border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] w-[36rem] sm:rounded-full
    
        dark:bg-gray-800/30 dark:shadow-white/10
        '
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.5 }}
        ></motion.div>
        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem]  font-medium text-gray-500
        sw:w-[initial] sm:flex-nowrap sm:gap-5'>
                {
                    links.map(link => (
                        <motion.li className='h-3/4 flex items-center justify-center' key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >

                            <Link className={clsx('relative flex flex-col w-full items-center justify-center px-3 py-3 hover:text-gray-50 dark:hover-text-red transition dark:text-white/70', link.title === currentSection && 'text-gray-950 dark:text-[#fff]')}
                                onClick={() => {
                                    setCurrentSection(link.title)
                                    setTimeOfLastClick(Date.now())
                                }
                                }
                                href={link.hash}>

                                {link.title}

                                {(link.title === currentSection) && (
                                    <motion.span className={'bg-black/5 rounded-full absolute inset-0 -z-10 h-[65%] m-auto dark:bg-white/60 '}
                                        layoutId='currentSection'
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    </header>
}
