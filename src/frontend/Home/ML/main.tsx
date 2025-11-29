import { useState } from "react";
import { MLData } from "../../../utils/Data/FormData/MachineLearning";
import type { ML } from "../../../utils/types/FormData/MachineLearning";
import FetchMLData from "../../../utils/util/fetchML";
import { motion } from "motion/react";
import MLForm from "./form";
import MLResult from "./result";
import type { result } from "../../../utils/types/FormData/ResultProps";

export default function MachineLearning(){
    const [data, setData] = useState<ML>(MLData)
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [result, setResult] = useState<result>({prediction: NaN})
    function handleSubmitForm(e: React.FormEvent){
        e.preventDefault();
        FetchMLData(data, setIsloading, setResult)
    }
    return(
        <section className="grid lg:grid-cols-2 gap-3">
            <motion.div 
                className="image rounded-sm flex w-full relative"
                initial={{ opacity: 0, y:20, scale:0}}
                animate={{ opacity: 1, y:10, scale:0.9}}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.6, bounce: 0.1 },
                }}
            >
                <img src="/images/water.jpeg" alt="" className="lg:h-screen h-[60vh] w-screen brightness-50 rounded-sm"/>
                <div className="text absolute text-white p-4 w-full self-end bg-neutral-900/50 rounded-b-sm">
                    <p className="font-bold text-lg md:text-2xl">Clean Water Prediction System</p>
                    <p className="max-sm:text-sm">Clean water is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minus.</p>
                </div>
            </motion.div>
                {isNaN(result.prediction) ? (
                    <motion.div
                        className="flex flex-col justify-center items-center px-5 md:px-10"
                        initial={{ opacity: 0, x:10 }}
                        animate={{ opacity: 1, x:0 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <MLForm handleSubmitForm={handleSubmitForm} data={data} isLoading={isLoading} setData={setData}/>
                    </motion.div>
                ) : (
                    <motion.div
                        className="flex flex-col justify-center items-center px-5 md:px-10"
                        initial={{ opacity: 0, x:10 }}
                        animate={{ opacity: 1, x:0 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <MLResult prediction={result.prediction} setResult={setResult} setData={setData}/>
                    </motion.div>
                )}
        </section>
    )
}