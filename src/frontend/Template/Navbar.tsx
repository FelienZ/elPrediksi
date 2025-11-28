import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router';
import { NavbarItems } from '../../utils/Data/Navbar/Items';
import type { NavbarTypes } from '../../utils/types/NavbarTypes';
export default function Navbar(){
    const location = useLocation()
    const Pages: NavbarTypes = NavbarItems.find(n => location.pathname === '/ds' ? n.title === 'Movie Preferences' : n.title === 'Water Quality')!
    return(
        <section className="flex w-screen fixed z-20 top-0 bg-card text-card-foreground drop-shadow-sm justify-between p-4">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={Pages.icon} className={`${location.pathname === '/ds' ? 'text-stone-800' : 'text-blue-400'} transition-all duration-400 ease-in-out text-2xl`}/>
                <p className="font-bold">{Pages.title}</p>
            </div>
            <ul className="flex items-center gap-5 font-bold mx-5">
                <NavLink className={({isActive}) => isActive ? 'underline transition-opacity duration-400 ease-in-out underline-offset-4 text-shadow-md opacity-100' : 'opacity-60 text-shadow-md'} to={'ml'}><p>ML</p></NavLink>
                <li>|</li>
                <NavLink className={({isActive}) => isActive ? 'underline transition-opacity duration-400 ease-in-out underline-offset-4 text-shadow-md opacity-100' : 'opacity-60 text-shadow-md'} to={'ds'}><p>DS</p></NavLink>
            </ul>
        </section>
    )
}