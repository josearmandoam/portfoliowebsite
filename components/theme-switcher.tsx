'use client';

import { useThemeContext } from '@/context/theme-context';
import React, { useEffect, useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeSwitcher() {
    const { theme, handleChangeThemeButton } = useThemeContext();
    return (
        <button className='fixed bottom-5 right-5 w-12 h-12 shadow-sm 
    shadow-black/70 flex items-center justify-center rounded-full
    hover:scale-110 transition-all
    
    dark:shadow-white/50 border-white/60 dark:bg-black
    '
            onClick={handleChangeThemeButton}
        >
            {theme === 'dark' ?
                <>
                    <FaRegMoon />
                </>
                :
                <>
                    <IoSunnyOutline />
                </>}
        </button>
    )
}
