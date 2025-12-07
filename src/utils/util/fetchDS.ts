import axios from "axios"
import type { Dispatch, SetStateAction } from "react"
import type { Users } from "../types/DS/Users";
const api_url = import.meta.env.VITE_API2_URL;
// ini buat ambil data movie title dgn keyword
export default async function FetchDSData(value: number, setList: Dispatch<SetStateAction<Users[]>>) {
    try {
        const {data: response} = await axios.get(`http://localhost:5000/users?q=${value}`)
        if(!isNaN(value) && value > 0){
            setList(response.userIds)
        }
        else{
            setList([])
        }
    } catch (error) {
        console.error(error)
    }
}