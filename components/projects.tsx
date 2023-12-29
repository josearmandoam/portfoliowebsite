'use client';

import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './section-heading'
import ProjectCard from './project-card'
import { projectsData } from '@/lib/data'
import type { Card } from '@/types/types';
import { useInView } from 'react-intersection-observer';
import { getActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} className='mt-8 sm:mt-0 scroll-mt-28 flex flex-col items-center justify-center w-full' id="projects">
      <SectionHeading> My Projects</SectionHeading>
      {projectsData.map((card : Card, index:number) => (
        <ProjectCard card={card} key={index}/>
      ))}
    </section>
  )
}
