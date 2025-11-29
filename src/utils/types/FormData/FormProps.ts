import type { Dispatch, SetStateAction } from "react";
import type React from "react";
import type { ML } from "./MachineLearning";

export interface MLProps{
    handleSubmitForm: (e: React.FormEvent) => void,
    isLoading: boolean,
    setData: Dispatch<SetStateAction<ML>>,
    data: ML
}