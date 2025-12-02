import type { Dispatch, SetStateAction } from "react";

export interface FormAction{
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}