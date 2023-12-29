'use client';

import { sectionType } from '@/types/types';
import React, { useState, createContext, useContext } from 'react'

type sectionContextType = {
    currentSection: sectionType | null;
    setCurrentSection: React.Dispatch<React.SetStateAction<sectionType | null>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentSectionContext = createContext<sectionContextType | null>(null);

export default function ActiveSectionContextProvider({children} : {children: React.ReactNode}) {
    const [currentSection, setCurrentSection] = useState<sectionType | null>(null);
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    
  return (
    <CurrentSectionContext.Provider value={
            {
                currentSection, 
                setCurrentSection,
                timeOfLastClick,
                setTimeOfLastClick
            }
        }>{children}
    </CurrentSectionContext.Provider>
  )
}

export function getActiveSectionContext(){
    const currentSectionContext = useContext( CurrentSectionContext );
    
    if(currentSectionContext === null){
        throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider');
    }

    return currentSectionContext;
}


