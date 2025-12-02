import type { ML } from "../../types/ML/MachineLearning";
import type { OptionType } from "../../types/OptionTypes";

const defaultOption: OptionType = {
    value: -1,
    label: ''
}
// dummy
export const MLData: ML = {
    pH: NaN,
    Color: defaultOption,
    Turbidity: defaultOption,
    Odor: defaultOption,
    Source: defaultOption,
}