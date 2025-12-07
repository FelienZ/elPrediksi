import axios from "axios";
import type { Users } from "../types/DS/Users";
import type { Dispatch, SetStateAction } from "react";
import type { ListMovie } from "../types/DS/ListMovie";
import { toast } from "sonner";

export default async function getDS(value: Users, setMovie:Dispatch<SetStateAction<ListMovie>>, setValue:Dispatch<SetStateAction<Users>>){
    const {data: response} = await axios.post('http://localhost:5000/getmovie', value)
    if(response.movies.length){
        setMovie(response)
        toast("Berhasil Mendapatkan Data User")
    }else{
        toast("Gagal Mendapatkan Data User")
    }
    // setValue({userId:0})
}