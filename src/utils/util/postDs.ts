import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import type { Recommendations } from "../types/DS/Recommend";
import { toast } from "sonner";
import type { Users } from "../types/DS/Users";
const api_key = import.meta.env.VITE_API_KEY
const api_url = import.meta.env.VITE_API2_URL;
export default async function PostDSData(query: Users, setIsLoading: Dispatch<SetStateAction<boolean>>, setRecommendations: Dispatch<SetStateAction<Recommendations[]>>, setQuery: Dispatch<SetStateAction<Users>>){
    setIsLoading(true)
    try {
        const {data: response} = await axios.post(`http://localhost:5000/recommend`, query)
        console.log(response, query)
        const MovieData = await Promise.all(response.recommendations?.map(async(r: Recommendations) => {
            return{
                title: r.title,
                poster: await axios.get(`https://omdbapi.com/?t=${r.title}&apikey=${api_key}`).then(r =>r.data?.Poster?? '/images/not-found.jpg'),
                id: r.movieId
            }
        }))
        setRecommendations(MovieData)
        setQuery({userId:0})
    } catch (error) {
        console.error(error)
        toast('Gagal Mendapatkan Prediksi')
        setIsLoading(false)
    }finally{
        setIsLoading(false)
    }
}