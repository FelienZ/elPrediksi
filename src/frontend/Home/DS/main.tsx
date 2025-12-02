import { motion } from "motion/react";
import DSForm from "./form";
import { useEffect, useState } from "react";
import type { ListMovie } from "../../../utils/types/DS/ListMovie";
import FetchDSData from "../../../utils/util/fetchDS";
import { DSData } from "../../../utils/Data/FormData/DataScience";
import type { DS } from "../../../utils/types/DS/DataScience";
import { Badge } from "../../../components/ui/badge";
import { CircleX } from "lucide-react";
import type { Recommendations } from "../../../utils/types/DS/Recommend";
import DSResult from "./result";

export default function DataScience(){
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<DS>(DSData) //value search
    const [list, setList] = useState<ListMovie[]>([]) //ini buat list dalam Command (hasil fetch)
    const [isLoading, setIsloading]= useState<boolean>(false)
    const [query, setQuery] = useState<DS[]>([])
    const [recommendations, setRecommendations] = useState<Recommendations[]>([])
    function handleDeleteItem(id: string){
        setQuery(query.filter(q => q.id !== id))
    }
    //dapetin list
    useEffect(()=>{
        FetchDSData(value.title, setList)
    }, [value.title])
    return(
        <section className="grid lg:grid-cols-2 place-content-center min-h-screen gap-3">
            <motion.div 
                className="image rounded-sm w-full border"
                initial={{ opacity: 0, y:20, scale:0 }}
                animate={{ opacity: 1, y:10, scale:0.9 }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.6, bounce: 0.1 },
                }}
            >
                <img src="/images/new-movie.jpg" alt="" className="lg:h-[80vh] h-[40vh] w-full brightness-50 rounded-sm"/>
                <div className="absolute text-white p-4 w-full self-end bg-neutral-900/50 rounded-b-sm">
                    <p className="font-bold text-lg md:text-2xl">Movie Recommendation System</p>
                    <p className="max-sm:text-sm">Movie Recommendation is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minus.</p>
                </div>
            </motion.div>
            {recommendations.length ?(
                <DSResult recommendations={recommendations} setRecommendations={setRecommendations}/>
            ): (
                <motion.div 
                className="flex flex-col justify-center gap-6 items-center px-5 md:px-10"
                initial={{ opacity: 0, x:10 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                <DSForm
                    open={open} 
                    setOpen={setOpen} 
                    value={value} 
                    setValue={setValue} 
                    list={list} 
                    isLoading={isLoading}
                    query={query}
                    setQuery={setQuery}
                    setIsLoading={setIsloading}
                    setRecommendations={setRecommendations}
                />
                {query.length? (
                    <div className="flex flex-col gap-3 w-full items-center">
                        <p className="font-bold">Film Pilihan Kamu</p>
                        <div className="grid grid-cols-2 gap-2 w-full">
                        {query.map(q => (
                            <div key={q.id} className="flex w-full">
                                <Badge variant={'outline'} key={q.id} className="flex p-1 px-2 w-full justify-between items-center">
                                    <p>{q.title}</p>
                                    <div onClick={()=>handleDeleteItem(q.id)}>
                                        <CircleX className="size-3"/>
                                    </div>
                                </Badge>
                            </div>
                            ))}
                        </div>
                    </div>
                ): ''}
            </motion.div>
            )}
        </section>
    )
}