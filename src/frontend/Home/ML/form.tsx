import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Spinner } from "../../../components/ui/spinner"
import { CMap } from "../../../utils/Data/FormData/Map/Color"
import { OMap } from "../../../utils/Data/FormData/Map/Odor"
import { Smap } from "../../../utils/Data/FormData/Map/Source"
import { TMap } from "../../../utils/Data/FormData/Map/Turbidity"
import type { MLProps } from "../../../utils/types/FormData/FormProps"

// handleSubmitForm:(v: React.FormEvent)=> void, setData:(v: ML)=> Dispatch<SetStateAction<ML>> , data: ML, isLoading: boolean
export default function MLForm({handleSubmitForm, setData, data, isLoading}: MLProps){
    return(
        <form onSubmit={(e) => handleSubmitForm(e)} className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-4 w-full">
                    <p className="font-medium text-lg md:text-xl">Prediksi Kualitas Air</p>
                    <div className="flex flex-col w-full gap-2">
                        <Label htmlFor="pH" className="max-sm:text-sm">pH</Label>
                        <Input className="max-sm:text-xs" type="text" onChange={(e)=> setData({...data, pH: Number(e.target.value)})} id="pH" placeholder="Masukkan data pH" />
                        <p className="text-muted-foreground text-sm px-2 max-sm:text-xs">
                            pH yang valid adalah {`0 < pH <= 14`}.
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="turbid" className="max-sm:text-sm">Kekeruhan</Label>
                        <Select onValueChange={(val) => {
                            const selected = TMap.find(t=> t.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Turbidity: selected!})
                        }}>
                        <SelectTrigger className="w-full max-sm:text-xs">
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
                        <Label htmlFor="odor" className="max-sm:text-sm">Aroma</Label>
                        <Select  onValueChange={(val) => {
                            const selected = OMap.find(o=> o.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Odor: selected!})
                        }}>
                        <SelectTrigger className="w-full max-sm:text-xs">
                            <SelectValue placeholder="Tingkat Aroma Air" />
                        </SelectTrigger>
                        <SelectContent>
                            {OMap.map(i=>(
                                <SelectItem value={i.label} key={i.value}>{i.label}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="soruce" className="max-sm:text-sm">Sumber Air</Label>
                        <Select  onValueChange={(val) => {
                            const selected = Smap.find(s=> s.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Source: selected!})
                        }}>
                        <SelectTrigger className="w-full max-sm:text-xs">
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
                        <Label htmlFor="soruce" className="max-sm:text-sm">Warna Air</Label>
                        <Select  onValueChange={(val) => {
                            const selected = CMap.find(c=> c.label.toString().toLowerCase() === val.toLowerCase())
                            setData({...data, Color: selected!})
                        }}>
                        <SelectTrigger className="w-full max-sm:text-xs">
                            <SelectValue placeholder="Pilih Warna Air" />
                        </SelectTrigger>
                        <SelectContent>
                            {CMap.map(i=>(
                                <SelectItem value={i.label} key={i.value}>{i.label}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    {isLoading ? (
                        <Button variant="outline" disabled size="sm" className="flex gap-3 justify-center items-center w-full">
                            <Spinner />
                            Please wait
                        </Button>
                    ): (
                        <Button variant="default" className="grid items-center w-full">Prediksi Sekarang!</Button>
                    )
                    }
                </form>
    )
}