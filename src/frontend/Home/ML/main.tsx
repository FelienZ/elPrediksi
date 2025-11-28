import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function MachineLearning(){
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
                <div className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-3 w-full">
                    <p className="font-medium text-xl">Prediksi Kualitas Air Minum</p>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="pH">pH</Label>
                        <Input type="text" id="pH" placeholder="Masukkan data pH" />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="turbid">Kekeruhan</Label>
                        <Input type="text" id="turbid" placeholder="Masukkan data Kekeruhan" />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="odor">Odor</Label>
                        <Input type="text" id="odor" placeholder="Masukkan data tingkat aroma" />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="temp">Temperatur</Label>
                        <Input type="text" id="temp" placeholder="Masukkan data suhu" />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="soruce">Sumber Air</Label>
                        <Input type="text" id="source" placeholder="Sumber Air" />
                    </div>
                <Button variant="default" className="grid  items-center w-full">Prediksi Sekarang!</Button>
                </div>
            </div>
        </section>
    )
}