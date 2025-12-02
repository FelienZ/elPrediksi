import { motion } from "motion/react"
import type { DSResultProps } from "../../../utils/types/DS/ResultProps"
import { Button } from "../../../components/ui/button"

export default function DSResult({recommendations, setRecommendations}: DSResultProps){
    return(
        <motion.div 
                className="flex flex-col justify-between bg-background text-foreground rounded-sm border drop-shadow-sm gap-5 items-center p-4 md:px-6"
                initial={{ opacity: 0, x:10 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                >
                <p className="font-bold text-2xl">Rekomendasi Film</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-[50vh] md:h-[75vh] overflow-y-auto">
                    {recommendations.map(r => (
                        <div key={r.id} className="flex flex-col gap-3 items-center justify-center">
                            <img src={r.poster} alt={r.title} className="w-35 h-50"/>
                            <p className="font-medium text-sm text-center h-15">{r.title}</p>
                        </div>
                    ))}
                </div>
                <Button onClick={()=>setRecommendations([])} className="w-full">Back?</Button>
            </motion.div>
    )
}