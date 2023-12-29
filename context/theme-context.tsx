'use client';

import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
    theme: Theme | null;
    handleChangeThemeButton: () => void;
}

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const ThemeContext = createContext<ThemeContextType | null>(null);
type Theme = 'light' | 'dark';

export default function ThemeContextProvider({children} : {children: React.ReactNode}) {
    const [theme, setTheme] = useState<Theme | null>(null);

    const handleChangeThemeButton = () => {
        if (theme === 'dark') {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
    }
    useEffect(() => {
        const theme = window.localStorage.getItem('theme') as Theme;
        setTheme(theme);
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }else if(isBrowserDefaultDark()){
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);
  return (
    <ThemeContext.Provider value={{theme, handleChangeThemeButton }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext(){
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useThemeContext must be used within ThemeContextProvider');
    }

    return context;
}
