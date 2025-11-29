import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { MLData } from "../../../utils/Data/FormData/MachineLearning";
import type { ML } from "../../../utils/types/FormData/MachineLearning";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { TMap } from "../../../utils/Data/FormData/Map/Turbidity";
import { OMap } from "../../../utils/Data/FormData/Map/Odor";
import { Smap } from "../../../utils/Data/FormData/Map/Source";
import { CMap } from "../../../utils/Data/FormData/Map/Color";
import FetchMLData from "../../../utils/util/fetchML";

export default function MachineLearning(){
    const [data, setData] = useState<ML>(MLData)
    function handleSubmitForm(e: React.FormEvent){
        e.preventDefault();
        FetchMLData(data)
    }
    return(
        <section className="grid lg:grid-cols-2 gap-3">
            <div className="image rounded-sm flex w-full relative">
                <img src="/images/water.jpeg" alt="" className="h-screen brightness-50 rounded-sm"/>
                <div className="text absolute text-white p-4 w-full self-end bg-neutral-900/50">
                    <p className="font-bold text-2xl">Clean Water Prediction System</p>
                    <p>Clean water is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minus.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center px-10">
                <form onSubmit={(e) => handleSubmitForm(e)} className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-3 w-full">
                    <p className="font-medium text-xl">Prediksi Kualitas Air</p>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="pH">pH</Label>
                        <Input type="number" onChange={(e)=> setData({...data, pH: e.target.valueAsNumber})} id="pH" placeholder="Masukkan data pH" />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="turbid">Kekeruhan</Label>
                        <Select onValueChange={(val) => {
                            const selected = TMap.find(t=> t.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Turbidity: selected!})
                        }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tingkat Kekeruhan" />
                        </SelectTrigger>
                        <SelectContent>
                            {TMap.map(i=>(
                                <SelectItem key={i.value} value={i.label}>{i.label}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="odor">Odor</Label>
                        <Select  onValueChange={(val) => {
                            const selected = OMap.find(o=> o.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Odor: selected!})
                        }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Aroma Air" />
                        </SelectTrigger>
                        <SelectContent>
                            {OMap.map(i=>(
                                <SelectItem value={i.label} key={i.value}>{i.label}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="soruce">Sumber Air</Label>
                        <Select  onValueChange={(val) => {
                            const selected = Smap.find(s=> s.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Source: selected!})
                        }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Sumber Air" />
                        </SelectTrigger>
                        <SelectContent>
                            {Smap.map(i=>(
                                <SelectItem value={i.label} key={i.value}>{i.label}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="soruce">Warna Air</Label>
                        <Select  onValueChange={(val) => {
                            const selected = CMap.find(c=> c.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Color: selected!})
                        }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Warna Air" />
                        </SelectTrigger>
                        <SelectContent>
                            {CMap.map(i=>(
                                <SelectItem value={i.label} key={i.value}>{i.label}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    <Button variant="default" className="grid  items-center w-full">Prediksi Sekarang!</Button>
                </form>
            </div>
        </section>
    )
}