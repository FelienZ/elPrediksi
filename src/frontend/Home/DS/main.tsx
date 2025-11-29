import { motion } from "motion/react";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Calendar28 } from "../../Calendar";

export default function DataScience(){
    return(
        <section className="grid lg:grid-cols-2 gap-3">
            <motion.div 
                className="image rounded-sm flex w-full relative"
                initial={{ opacity: 0, y:20, scale:0 }}
                animate={{ opacity: 1, y:10, scale:0.9 }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.6, bounce: 0.1 },
                }}
            >
                <img src="/images/netflix.jpg" alt="" className="lg:h-screen h-[60vh] w-full brightness-50 rounded-sm"/>
                <div className="text absolute text-white p-4 w-full self-end bg-neutral-900/50 rounded-b-sm">
                    <p className="font-bold text-lg md:text-2xl">Movie Recommendation System</p>
                    <p className="max-sm:text-sm">Movie Recommendation is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minus.</p>
                </div>
            </motion.div>
            <motion.div 
                className="flex flex-col justify-center items-center px-5 md:px-10"
                initial={{ opacity: 0, x:10 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                <div className="flex flex-col bg-card text-card-foreground items-center drop-shadow-sm p-4 rounded-sm gap-3 w-full">
                    <p className="font-medium text-lg md:text-xl">Prediksi Preferensi Konten</p>
                    <div className="flex flex-col w-full gap-3">
                        <Label htmlFor="age" className="max-sm:text-sm">Usia Anda</Label>
                         <Input type="text" id="age" className="max-sm:text-xs" placeholder="Masukkan Usia Anda" />
                    </div>
                    <div className="w-full">
                        <Calendar28/>
                    </div>
                    <div className="flex flex-col w-full gap-3 max-sm:text-sm">
                        <Label htmlFor="genre">Preferensi Genre</Label>
                        <p className="text-muted-foreground text-sm max-sm:text-xs">
                            Silahkan Pilih Preverensi Genre Anda.
                        </p>
                        <div className="flex max-sm:grid grid-cols-3 gap-2 items-center justify-evenly">
                            <div className="flex items-center gap-2">
                                <Checkbox value="action" id="action"/>
                                <Label htmlFor="action" className="max-sm:font-normal max-sm:text-[10px]">Action</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="sci-fi" id="sci-fi"/>
                                <Label htmlFor="sci-fi" className="max-sm:font-normal max-sm:text-[10px]">Sci-Fi</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="adventure" id="adventure"/>
                                <Label htmlFor="adventure" className="max-sm:font-normal max-sm:text-[10px]">Adventure</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="drama" id="drama"/>
                                <Label htmlFor="drama" className="max-sm:font-normal max-sm:text-[10px]">Drama</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox value="romance" id="romance"/>
                                <Label htmlFor="romance" className="max-sm:font-normal max-sm:text-[10px]">Romance</Label>
                            </div>
                        </div>
                    </div>
                <Button variant="default" className="grid  items-center w-full">Prediksi Sekarang!</Button>
                </div>
            </motion.div>
        </section>
    )
}