import type { Dispatch, SetStateAction } from "react";
import type React from "react";
import type { ML } from "./MachineLearning";
import type { FormAction } from "../FormAction";

export interface MLProps extends FormAction{
    handleSubmitForm: (e: React.FormEvent) => void,
    setData: Dispatch<SetStateAction<ML>>,
    data: ML
}