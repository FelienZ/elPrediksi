import axios from "axios";
import type { DS } from "../types/DS/DataScience";
import type { Dispatch, SetStateAction } from "react";
import type { Recommendations } from "../types/DS/Recommend";
import { nanoid } from 'nanoid'
const api_key = import.meta.env.VITE_API_KEY
const api_url = import.meta.env.VITE_API2_URL;
export default async function PostDSData(query: DS[], setIsLoading: Dispatch<SetStateAction<boolean>>, setRecommendations: Dispatch<SetStateAction<Recommendations[]>>, setQuery: Dispatch<SetStateAction<DS[]>>){
    setIsLoading(true)
    try {
        const {data: response} = await axios.post(`${api_url}/recommend`, query)
        const MovieData = await Promise.all(response.recommendations?.map(async(r: Recommendations) => {
            return{
                title: r.title,
                poster: await axios.get(`https://omdbapi.com/?t=${r.title}&apikey=${api_key}`).then(r =>r.data?.Poster?? '/images/not-found.jpg'),
                id: `Poster-${nanoid()}`
            }
        }))
        setQuery([])
        setRecommendations(MovieData)
    } catch (error) {
        console.log(error)
    }finally{
        setIsLoading(false)
    }
}