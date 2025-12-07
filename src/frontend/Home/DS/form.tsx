import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import Combobox from "../../Combobox";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";
import { CircleCheck, InfoIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import type { DSProps } from "../../../utils/types/DS/FormProps";
import type React from "react";
import PostDSData from "../../../utils/util/postDs";
import { Spinner } from "../../../components/ui/spinner";
import getDS from "../../../utils/util/getDs";
export default function DSForm({open, setOpen, value, setValue, list, isLoading, setIsLoading, query, setQuery, setMovie, setRecommendations}: DSProps){
    // getmovie Data
    function handleSaveQuery(e:React.FormEvent){
        e.preventDefault();
        setQuery(value)
        getDS(value, setMovie, setValue)
    }
    function handleSubmitForm(e: React.FormEvent){
        e.preventDefault();
        PostDSData(query, setIsLoading, setRecommendations, setQuery)
    }
    return(
        <form onSubmit={(e)=> handleSubmitForm(e)} className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-4 w-full">
                    <p className="font-medium text-lg md:text-xl">Prediksi Preferensi Konten</p>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="title" className="max-sm:text-sm">Pilih User ID: </Label>
                         <Combobox 
                            open={open} 
                            setOpen={setOpen} 
                            value={value} 
                            setValue={setValue} 
                            list={list} 
                            />
                    </div>
                    <Button variant={'outline'} disabled={(value.userId === 0)} onClick={(e)=>handleSaveQuery(e)} className="rounded-md self-end">Simpan <CircleCheck className="size-4.5"/></Button>
                    {query.userId === 0 ? (
                    <div className="flex gap-3 items-center">
                        <p className="text-muted-foreground text-sm px-2 max-sm:text-xs">
                            Anda Belum Memilih User.
                        </p>
                        <Tooltip>
                            <TooltipTrigger type="button">
                                <Badge variant={'outline'} className="size-7 flex rounded-full"><InfoIcon className="size-6"/></Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Masukkan ID User</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    ): ''}
                    <Button type="submit" variant="default" className="flex gap-2 items-center w-full"> {isLoading ? <Spinner /> : ''}Prediksi Sekarang!</Button>
                </form>
    )
}