import { getActiveSectionContext } from "@/context/active-section-context";
import { sectionType } from "@/types/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(section:sectionType, threshold = 0.75){
    const {currentSection, setCurrentSection, timeOfLastClick, setTimeOfLastClick} = getActiveSectionContext();
    const {ref, inView, entry} = useInView({
        threshold: threshold
    })
    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000 ){
            setCurrentSection(section);
        }
    }, [inView, timeOfLastClick]);

    return {ref, inView}
}