import { faDroplet, faFilmAlt } from "@fortawesome/free-solid-svg-icons";
import type { NavbarTypes } from "../../types/NavbarTypes";

export const NavbarItems: NavbarTypes[] = [
    {
        icon: faFilmAlt,
        title: 'Movie Preferences'
    },
    {
        icon: faDroplet,
        title: 'Water Quality Checker'
    }
]