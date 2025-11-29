/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({children}: {children:React.ReactNode}){
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    useEffect(()=> {
        const getTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
        setTheme(getTheme)
        if (getTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [])

    function handleThemeChange():void{
        setTheme((prev)=>{
            const newTheme = prev === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newTheme
        })
    }
    return(
        <ThemeContext.Provider value={{theme, setTheme: handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}