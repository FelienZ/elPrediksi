import type { Dispatch, SetStateAction } from "react";
import type { FormAction } from "../FormAction";
import type { Recommendations } from "./Recommend";
import type { Users } from "./Users";
import type { ListMovie } from "./ListMovie";

export interface DSProps extends FormAction{
    open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>, 
    value: Users, 
    setValue: Dispatch<SetStateAction<Users>>, 
    list: Users[],
    query: Users, 
    setQuery: Dispatch<SetStateAction<Users>>,
    setMovie: Dispatch<SetStateAction<ListMovie>>
    setRecommendations: Dispatch<SetStateAction<Recommendations[]>>
}