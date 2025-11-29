import { faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../../../components/ui/button"
import type { MLResultProps } from "../../../utils/types/FormData/ResultProps"
import { MLData } from "../../../utils/Data/FormData/MachineLearning"

export default function MLResult({prediction, setResult, setData}: MLResultProps){
    const MapResult = (prediction === 0 ? 'Air Bersih dan Aman' : 'Air Tidak Aman')
    function handleBack():void{
        setResult({prediction: NaN})
        setData(MLData)
    }
    return(
        <section className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-3 w-full">
            <p className="font-bold">Hasil Prediksi Kualitas Air:</p>
            {
                prediction === 0 ? (
                    <div className="flex flex-col gap-2 items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-500"/>
                        <p>{MapResult}</p>
                    </div>
                ): (
                    <div className="flex flex-col gap-2 items-center">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-2xl text-red-500"/>
                        <p>{MapResult}</p>
                    </div>
                )
            }
            <Button variant={"outline"} onClick={()=> handleBack()}>Back?</Button>
        </section>
    )
}