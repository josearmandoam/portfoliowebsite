'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useThemeContext } from '@/context/theme-context';


export default function Experience() {
    const { ref, inView } = useSectionInView("Experience", 0.5);
    const {theme} = useThemeContext();
    return (
        <section id="experience" ref={ref} className='scroll-mt-28 w-full'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor='' animate={inView}>
                {
                    experiencesData.map((item, index) => (
                        <VerticalTimelineElement key={index}
                            icon={item.icon}
                            visible={true}
                            date={item.date}
                            dateClassName={theme === 'light' ? 'text-black/80' : 'text-white/90'}
                            contentStyle={{
                                background: theme === 'light' ? '#f3f4f6' : 'rgb(34, 41, 55)',
                                color: '#000',
                                boxShadow: theme === 'light' ? 'none' : '0 0 1rem .2rem rgba(255, 255, 255, 0.05)',
                                textAlign: 'left',
                                border:  theme === 'light' ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid rgba(255, 255, 255, 0.05)',
                                padding: '1.3rem 2rem',
                            }}
                            contentArrowStyle={{ borderRight: theme === 'light' ? '0.4rem solid  #9ca3af' : '0.4rem solid  #9ca3af'}}
                            iconStyle={{
                                background: theme === 'light' ? 'white' : 'rgb(34, 41, 55)',
                                fontSize: '1.5rem'
                            }}
                        >
                            <h3 className='text-md font-bold dark:text-white/90'
                            >{item.title}</h3>
                            <p className='text-md font-semibold dark:text-white/80'>{item.location}</p>
                            <p className='dark:text-white/60'>{item.description}</p>
                        </VerticalTimelineElement>
                    ))
                }

            </VerticalTimeline>
        </section>
    )
}
