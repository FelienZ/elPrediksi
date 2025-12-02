import { toast } from "sonner"
import type { MLSubmit } from "../types/ML/Submit"
import type { ML } from "../types/ML/MachineLearning"
import axios from "axios"
import type { Dispatch, SetStateAction } from "react"
import type { result } from "../types/ML/ResultProps"

export default async function FetchMLData(data: ML, setIsLoading:(v: boolean)=> void, setResult: Dispatch<SetStateAction<result>>){
    setIsLoading(true)
    if(data.Color.value === -1 || data.Odor.value === -1 || data.Source.value === -1 || data.Turbidity.value === -1 || isNaN(data.pH) || data.pH <= 0 || data.pH > 14){
        toast("Pastikan Data Valid!")
        return setIsLoading(false)
    }
    const payload: MLSubmit = {
            pH: data.pH,
            Color: data.Color.value,
            Odor: data.Odor.value,
            Source: data.Source.value,
            Turbidity: data.Turbidity.value,
        }
        try {
            const {data: result} = await axios.post('http://localhost:5000/predict', payload)
            setResult(result)
            setIsLoading(false)
        } catch (error) {
            toast('Gagal Mendapatkan Prediksi')
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
}