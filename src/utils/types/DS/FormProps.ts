import type { Dispatch, SetStateAction } from "react";
import type { ListMovie } from "./ListMovie";
import type { FormAction } from "../FormAction";
import type { DS } from "./DataScience";
import type { Recommendations } from "./Recommend";

export interface DSProps extends FormAction{
    open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>, 
    value: DS, 
    setValue: Dispatch<SetStateAction<DS>>, 
    list: ListMovie[],
    query: DS[], 
    setQuery: Dispatch<SetStateAction<DS[]>>,
    setRecommendations: Dispatch<SetStateAction<Recommendations[]>>
}