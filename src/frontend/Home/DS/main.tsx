import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Calendar28 } from "../../Calendar";

export default function DataScience(){
    return(
        <section className="grid lg:grid-cols-2 gap-3">
            <div className="image rounded-sm flex w-full relative">
                <img src="/images/netflix.jpg" alt="" className="h-screen brightness-50 rounded-sm"/>
                <div className="text absolute text-white p-4 w-full self-end bg-neutral-900/50">
                    <p className="font-bold text-2xl">Movie Recommendation System</p>
                    <p>Movie Recommendation is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minus.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center px-10">
                <div className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-3 w-full">
                    <p className="font-medium text-xl">Prediksi Preferensi Konten</p>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="age">Usia Anda</Label>
                        <Input type="text" id="age" placeholder="Masukkan Usia Anda" />
                    </div>
                    <div className="w-full">
                        <Calendar28/>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="genre">Preferensi Genre</Label>
                        <p className="text-muted-foreground text-sm">
                            Silahkan Pilih Preverensi Genre Anda.
                        </p>
                        <div className="flex items-center justify-evenly">
                            <div className="flex items-center gap-2">
                                <Checkbox value="action" id="action"/>
                                <Label htmlFor="action">Action</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="sci-fi" id="sci-fi"/>
                                <Label htmlFor="sci-fi">Sci-Fi</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="adventure" id="adventure"/>
                                <Label htmlFor="adventure">Adventure</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="drama" id="drama"/>
                                <Label htmlFor="drama">Drama</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="romance" id="romance"/>
                                <Label htmlFor="romance">Romance</Label>
                            </div>
                        </div>
                    </div>
                <Button variant="default" className="grid  items-center w-full">Prediksi Sekarang!</Button>
                </div>
            </div>
        </section>
    )
}