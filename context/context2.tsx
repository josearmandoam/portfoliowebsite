import React, { createContext, useState } from 'react'
import type { sectionType } from '@/types/types';

type sectionContextType = {
    currentSection: sectionType,
    setCurrentSection: React.Dispatch<React.SetStateAction<sectionType>>
}

const CurrentSectionContext = createContext<sectionContextType | null>(null);
export default function ContextExample({children}: {children: React.ReactNode}) {
    const [currentSection, setCurrentSection] = useState<sectionType | null>(null);
  return (
    <CurrentSectionContext.Provider value={{
        currentSection, 
        setCurrentSection
    }}>
        {children}
    </CurrentSectionContext.Provider>
  )
}
