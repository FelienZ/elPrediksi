import type { Dispatch, SetStateAction } from "react";
import type { ML } from "./MachineLearning";

export interface result{
    prediction: number
}

export interface MLResultProps extends result{
    setResult: Dispatch<SetStateAction<result>>
    setData: Dispatch<SetStateAction<ML>>
}