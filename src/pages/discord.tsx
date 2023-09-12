import Navbar from "@/components/NavBar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"]})

export default function Discord() {
    return (
        <div className={inter.className}>
            <h1 className="mt-4 text-5xl text-center font-bold text-white">Programmer Astolfo's Discord server</h1>
            <div className="text-center">
                <a href="https://discord.gg/JgFNmSwYME">
                <button className="bg-blue-600 my-8 text-white px-4 py-2 rounded-md">Join now</button>
                </a>
            </div>
            <h2 className="text-3xl text-white px-4 mt-2 font-bold">What does the Discord server offer?</h2>
            <p className="px-6 text-xl text-white font-bold">Custom Discord bot</p>
            <p className="px-8 text-white">The Discord has a custom bot which has ChatPoints, CatPoints and more</p>
            <img src="/Discord_Rc5GfxUzw1.png" alt="Discord bot" className="mx-6 rounded-md mt-2" />
            
            <p className="text-3xl text-white px-4 mt-2 font-bold">Femboy and non-femboy general</p>
            <p className="px-8 text-white">The Discord has a general for femboys and a general with no femboys.</p>
            <img src="/Discord_rPGOKhh0Pi.png" alt="Normal channels" className="mx-6 rounded-md mt-2" />
            <img src="/Discord_TeiAyUoQ9J.png" alt="Femboy channels" className="mx-6 rounded-md mt-2" />
            
            <p className="text-3xl text-white px-4 mt-2 font-bold">My Summer Car modding support</p>
            <p className="px-8 text-white">There is a forum channel where you can get modding support for My Summer Car mods from the owner or from other members of the Discord server.</p>
            <img src="/Discord_rAkc4GD2Xv.png" alt="Modding support channel" className="mx-6 rounded-md mt-2" />

            <Navbar sel="" />
        </div>
    )
}