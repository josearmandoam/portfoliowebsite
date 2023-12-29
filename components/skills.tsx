'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { once } from 'events';

const fateInAnimationVariants = {
    initial:{
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition:{
            delay: 0.05 * index,
        }
    })
}

export default function Skills() {
const {ref} = useSectionInView("Skills", 0.5);
  return (
    <section id="skills" className='scroll-mt-28 mb-16 mt-24' ref={ref}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex items-center justify-center gap-2 flex-row w-min(100,35rem) sm:w-[35rem] flex-wrap'>
        {(skillsData.length > 0) && skillsData.map((skill, index)=>(
            <motion.li 
            variants={fateInAnimationVariants}
            initial='initial'
            whileInView="animate"
            viewport={{
                once: true
            }}
            custom={index}
            className='border-[1px] px-4 py-2 rounded-full text-md dark:border-gray-50/20 dark:bg-gray-50 dark:text-black'
            key={index}>{skill?.title}</motion.li>
        ))}
      </ul>
    </section>
  )
}
