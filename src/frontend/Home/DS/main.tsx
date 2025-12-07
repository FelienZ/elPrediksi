import { motion } from "motion/react";
import DSForm from "./form";
import { useEffect, useState } from "react";
import FetchDSData from "../../../utils/util/fetchDS";
import type { Recommendations } from "../../../utils/types/DS/Recommend";
import DSResult from "./result";
import type { Users } from "../../../utils/types/DS/Users";
import type { ListMovie } from "../../../utils/types/DS/ListMovie";
import { Badge } from "../../../components/ui/badge";

export default function DataScience(){
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<Users>({userId: 0}) //value search
    const [list, setList] = useState<Users[]>([]) //ini buat list dalam Command (hasil fetch)
    const [isLoading, setIsloading]= useState<boolean>(false)
    const [query, setQuery] = useState<Users>({userId:0}) //simpan final user
    const [movie, setMovie] = useState<ListMovie>({userId:0, movies: []})
    const [recommendations, setRecommendations] = useState<Recommendations[]>([])
    //dapetin list
    useEffect(()=>{
        FetchDSData(value.userId, setList)
    }, [value.userId])
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
                    setMovie={setMovie}
                    query={query}
                    setQuery={setQuery}
                    setIsLoading={setIsloading}
                    setRecommendations={setRecommendations}
                />
                {movie.movies.length? (
                    <div className="flex flex-col gap-3 w-full items-center">
                        <p className="font-bold">Film Pilihan Kamu</p>
                        <div className="grid grid-cols-2 gap-2 w-full">
                        {movie.movies.map((m,i)=> (
                            <div key={i} className="flex w-full">
                                <Badge variant={'outline'} key={i} className="flex p-1 px-2 w-full justify-between items-center">
                                    <p>{m}</p>
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