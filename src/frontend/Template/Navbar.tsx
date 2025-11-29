import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router';
import { NavbarItems } from '../../utils/Data/Navbar/Items';
import type { NavbarTypes } from '../../utils/types/NavbarTypes';
import { motion } from "motion/react"
import { Button } from '../../components/ui/button';
import useTheme from '../../utils/hooks/useTheme';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    const location = useLocation()
    const {theme, setTheme} = useTheme()
    const Pages: NavbarTypes = NavbarItems.find(n => location.pathname === '/ds' ? n.title === 'Movie Preferences' : n.title === 'Water Quality Checker')!
    return(
        <section className="flex w-screen fixed z-20 top-0 bg-card text-card-foreground drop-shadow-sm justify-between p-4">
            <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 10 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    ease: 'easeInOut'
                }}
            >
                <FontAwesomeIcon icon={Pages.icon} className={`${location.pathname === '/ds' ? 'text-stone-800' : 'text-blue-400'} transition-all duration-400 ease-in-out text-2xl`}/>
                <p className="font-bold">{Pages.title}</p>
            </motion.div>
            <motion.div
                className="flex items-center gap-5 font-bold mx-5"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: -10 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    ease: 'easeInOut'
                }}
            >
                <NavLink className={({isActive}) => isActive ? 'underline transition-opacity duration-400 ease-in-out underline-offset-4 text-shadow-md opacity-100' : 'opacity-60 text-shadow-md'} to={'ml'}><p>ML</p></NavLink>
                <p>|</p>
                <NavLink className={({isActive}) => isActive ? 'underline transition-opacity duration-400 ease-in-out underline-offset-4 text-shadow-md opacity-100' : 'opacity-60 text-shadow-md'} to={'ds'}><p>DS</p></NavLink>
                <Button onClick={()=>setTheme()} className={`rounded-full transition-colors ease-in-out duration-300 flex w-15 px-1 ${theme === 'dark' ? 'justify-end bg-neutral-700 hover:bg-neutral-800' : 'justify-start bg-neutral-200 hover:bg-neutral-300'}`}>
                    <motion.div
                        className={`size-7 rounded-full transition-colors duration-200 ease-in-out ${theme === 'light' ? 'bg-neutral-300 text-neutral-600' : 'bg-neutral-800 text-white'} items-center justify-center flex my-0`}
                        layout
                        transition={{
                            type: "spring",
                            visualDuration: 0.2,
                            bounce: 0.2,
                        }}
                    >
                      {theme === 'light' ? <FontAwesomeIcon icon={faLightbulb}/> : <FontAwesomeIcon icon={faMoon}/>}
                      </motion.div>
                    </Button>
            </motion.div>
        </section>
    )
}