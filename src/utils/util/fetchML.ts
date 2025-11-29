import { toast } from "sonner"
import type { MLSubmit } from "../types/FormData/Submit"
import type { ML } from "../types/FormData/MachineLearning"
import axios from "axios"

export default async function FetchMLData(data: ML){
    const payload: MLSubmit = {
            pH: data.pH,
            Color: data.Color.value,
            Odor: data.Odor.value,
            Source: data.Source.value,
            Turbidity: data.Turbidity.value,
        }
        try {
            const {data: result} = await axios.post('http://localhost:5000/predict', payload)
            console.log(result)
        } catch (error) {
            toast('Gagal Mendapatkan Prediksi')
        }
}