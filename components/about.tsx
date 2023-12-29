'use client';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';
import { getActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const {ref} = useSectionInView("About", 0.75);
  return (
    <section ref={ref} className='mt-8 sm:mt-16 scroll-mt-28' id="about">
        <motion.div className='w-min(100,35rem) text-center sm:w-[35rem]' 
        initial = {{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className='my-2 leading-8'>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Phasellus cursus erat sed feugiat imperdiet. Praesent vehicula sem tellus, vitae cursus neque suscipit sit amet. Pellentesque suscipit tristique felis, pulvinar <strong>faucibus lectus fringilla nec</strong>. Nulla egestas a lectus in fringilla. Suspendisse hendrerit sit amet ante ac tincidunt. Nullam maximus nisi ut augue porttitor consectetur. Vestibulum gravida luctus arcu nec hendrerit. Pellentesque ac ultrices justo. Aliquam scelerisque, lectus interdum convallis rhoncus, turpis lectus ultrices lectus, a pellentesque dui ex non libero. Pellentesque tellus turpis, elementum eget augue nec, porta varius elit. Quisque ipsum erat, imperdiet nec nulla quis, blandit tincidunt sem.</p>
            <p className='my-2 leading-8'>Fusce at aliquam mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices <strong>posuere cubilia curae</strong>; Phasellus erat elit, efficitur et facilisis at, hendrerit quis nunc. Integer volutpat vehicula est, sed vulputate lorem ullamcorper vitae. Quisque tincidunt vitae nisl ut faucibus</p>
        </motion.div>
    </section>
  )
}
