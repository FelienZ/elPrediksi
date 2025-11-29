import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router';
import { NavbarItems } from '../../utils/Data/Navbar/Items';
import type { NavbarTypes } from '../../utils/types/NavbarTypes';
import { motion } from "motion/react"

export default function Navbar(){
    const location = useLocation()
    const Pages: NavbarTypes = NavbarItems.find(n => location.pathname === '/ds' ? n.title === 'Movie Preferences' : n.title === 'Water Quality')!
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
            </motion.div>
        </section>
    )
}