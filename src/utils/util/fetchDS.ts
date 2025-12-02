import axios from "axios"
import type { Dispatch, SetStateAction } from "react"
import type { ListMovie } from "../types/DS/ListMovie"

// ini buat ambil data movie title dgn keyword
export default async function FetchDSData(value: string, setList: Dispatch<SetStateAction<ListMovie[]>>) {
    try {
        const {data: response} = await axios.get(`http://localhost:5000/search?q=${value}`)
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