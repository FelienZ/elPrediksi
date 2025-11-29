import { Toaster } from "../../components/ui/sonner";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Template(){
    return(
        <section className="min-h-screen font-[Roboto] bg-background text-foreground transition-colors duration-300">
            <Navbar/>
                <main className="pt-10 md:pt-15 lg:pt-20 pb-5 md:px-5">
                    <Outlet/>
                    <Toaster/>
                </main>
        </section>
    )
}