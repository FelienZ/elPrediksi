import type { Dispatch, SetStateAction } from "react";
import type { Recommendations } from "./Recommend";

export interface DSResultProps{
    setRecommendations: Dispatch<SetStateAction<Recommendations[]>>
    recommendations: Recommendations[]
}