import axios from "axios"
import type { Dispatch, SetStateAction } from "react"
import type { ListMovie } from "../types/DS/ListMovie"
const api_url = import.meta.env.VITE_API2_URL;
// ini buat ambil data movie title dgn keyword
export default async function FetchDSData(value: string, setList: Dispatch<SetStateAction<ListMovie[]>>) {
    try {
        const {data: response} = await axios.get(`${api_url}/search?q=${value}`)
        if(value.length >= 4){
            setList(response)
        }
        if(value.length === 0){
            setList([])
        }
    } catch (error) {
        console.error(error)
    }
}