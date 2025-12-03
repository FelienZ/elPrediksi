import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import Combobox from "../../Combobox";
import { Input } from "../../../components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";
import { CircleCheck, InfoIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import type { DSProps } from "../../../utils/types/DS/FormProps";
import { DSData } from "../../../utils/Data/FormData/DataScience";
import { toast } from "sonner";
import type React from "react";
import PostDSData from "../../../utils/util/postDs";
import { Spinner } from "../../../components/ui/spinner";
export default function DSForm({open, setOpen, value, setValue, list, isLoading, setIsLoading, query, setQuery, setRecommendations}: DSProps){
    function handleSaveQuery(e: React.FormEvent){
        e.preventDefault();
        if(value.rating <= 0 || value.rating > 10){
            return toast('Rating Tidak Valid')
        }
        if(query.length === 10){
            return toast('Query Penuh')
        }
        if(!isNaN(value.rating) && value.title.trim() !== '' && query.length < 10){
            setQuery([...query, value])
        }
        setValue(DSData)
    }
    function handleSubmitForm(e: React.FormEvent){
        e.preventDefault();
        PostDSData(query, setIsLoading, setRecommendations, setQuery)
    }
    function checkNumber(v: number): number{
        return isNaN(v) ? 0 : v
    }
    return(
        <form onSubmit={(e)=> handleSubmitForm(e)} className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-4 w-full">
                    <p className="font-medium text-lg md:text-xl">Prediksi Preferensi Konten</p>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="title" className="max-sm:text-sm">Judul Film</Label>
                         <Combobox 
                            open={open} 
                            setOpen={setOpen} 
                            value={value} 
                            setValue={setValue} 
                            list={list} 
                            />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Label htmlFor="rating" className="max-sm:text-sm">Rating Film</Label>
                        <Input value={value.rating === 0 ? '' : Number(value.rating)} onChange={(e)=>setValue({...value, rating: checkNumber(Number(e.target.value))})} placeholder="Masukkan Rating 1-10" id="rating"/>
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground text-sm px-2 max-sm:text-xs">
                                Rating yang valid adalah 1~10.
                            </p>
                            <Button variant={'outline'} disabled={(value.rating === 0) || value.title.trim() === ''} onClick={(e)=>handleSaveQuery(e)} className="rounded-md">Simpan <CircleCheck className="size-4.5"/></Button>
                        </div>
                    </div>
                    {query.length === 0 ? (
                    <div className="flex gap-3 items-center">
                        <p className="text-muted-foreground text-sm px-2 max-sm:text-xs">
                            Anda Belum Mendeskripsikan Preferensi.
                        </p>
                        <Tooltip>
                            <TooltipTrigger type="button">
                                <Badge variant={'outline'} className="size-7 flex rounded-full"><InfoIcon className="size-6"/></Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Anda dapat menambahkan 5 data</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    ): ''}
                    <Button type="submit" variant="default" className="flex gap-2 items-center w-full"> {isLoading ? <Spinner /> : ''}Prediksi Sekarang!</Button>
                </form>
    )
}