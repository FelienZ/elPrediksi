import { toast } from "sonner"
import type { MLSubmit } from "../types/FormData/Submit"
import type { ML } from "../types/FormData/MachineLearning"

export default async function FetchMLData(data: ML){
    const payload: MLSubmit = {
            pH: data.pH,
            Color: data.Color.value,
            Odor: data.Odor.value,
            Source: data.Source.value,
            Turbidity: data.Turbidity.value,
        }
        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            })
            const result = await response.json()
            console.log(result)
        } catch (error) {
            toast('Gagal Mendapatkan Prediksi')
        }
}