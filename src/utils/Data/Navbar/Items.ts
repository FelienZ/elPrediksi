import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import type { NavbarTypes } from "../../types/NavbarTypes";

export const NavbarItems: NavbarTypes[] = [
    {
        icon: faSpotify,
        title: 'Spotify Behavior'
    },
    {
        icon: faDroplet,
        title: 'Water Quality'
    }
]