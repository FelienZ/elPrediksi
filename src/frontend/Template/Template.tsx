import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Template(){
    return(
        <section className="min-h-screen font-[Roboto] bg-background text-foreground">
            <Navbar/>
                <main className="pt-20 pb-5 px-5">
                    <Outlet/>
                </main>
        </section>
    )
}